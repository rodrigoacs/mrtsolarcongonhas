import express, { json } from 'express'
import { createTransport } from 'nodemailer'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(json())

const transporter = createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

app.post('/api/send-email', async (req, res) => {
  const { city, phone, message } = req.body

  if (!city || !phone || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' })
  }

  const mailOptions = {
    from: `"Formulário de Contato MRT" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: 'Novo Contato do Site MRT Solar',
    html: `
      <h1>Nova Mensagem do Formulário de Contato</h1>
      <p><strong>Cidade:</strong> ${city}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: 'E-mail enviado com sucesso!' })
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)
    res.status(500).json({ error: 'Ocorreu um erro ao enviar o e-mail.' })
  }
})

const PORT = process.env.PORT || 3040
app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`)
})
