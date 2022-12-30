const express = require('express')
const router = express.Router()
const userSchema = require('../models/userSchema')

router.post('/users', async (req, res)=>{
    try{
        const user = userSchema(req.body)
        await user.save()
        res.json(user)

        
    }catch(err){
        res.json({mesage: err})
    }
  
})

router.get('/get', async (req, res)=>{
    try{
        const allUser = userSchema.find()
        res.status(200).send(allUser)

        
    }catch(err){
        res.json({mesage: err})
    }
  
})

module.exports = router