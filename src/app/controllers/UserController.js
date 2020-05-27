import Queue from '../lib/Queue'

export default {
  async store(req, res) {
    const { name, email, password } = req.body

    const user = {
      name,
      email,
      password
    }

    // TODO: Add job RegistrationMail to queue
    await Queue.add('RegistrationMail', { user })
    await Queue.add('UserReport', { user })

    return res.json(user)
  }
}
