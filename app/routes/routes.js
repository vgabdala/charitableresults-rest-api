import express from 'express'
import mongoose from 'mongoose'
import {
	createResult, 
	viewResult, 
	updateResult, 
	deleteResult, 
	listResults
} from '../controllers/controller'

const routes   = express.Router() 

// List Results
routes.get('/result', listResults)

//Create Result
routes.post('/result', createResult)

//View Result
routes.get('/result/:resultId', viewResult)

//Edit Result
routes.patch('/result/:resultId', updateResult)

//Delete Result
routes.delete('/result/:resultId', deleteResult)

export default routes;