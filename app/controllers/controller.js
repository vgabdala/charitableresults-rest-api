import express from 'express'
import mongoose from 'mongoose'
import CharitableResult from '../models/charitableresult'

export function createResult(req, res){
	if(validateRequest(req, res)){

    if(req.body.photo != null || req.body.photo != ''){
      //TODO - Do upload to folder
      //TODO - Store path
    }

		var newCharitableResult = new CharitableResult({
        title: req.body.title,
        description: req.body.description,
        charitableEntityId: req.body.charitableEntityId,
        charitableEventId: req.body.charitableEventId,
        createdByUserId: req.body.createdByUserId
      });

      newCharitableResult.save((err) => {
        if(err) throw err
        res.json({ success: true, message: 'Charitable Result created successfully.' });
      });
	}
}

export function viewResult(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.resultId)){
		CharitableResult.find({_id: req.params.resultId}, (err,results) => {
      //TODO - return binary of photo
			if(err) throw err;
			res.json(results)
		});
	} else {
		return res.json({ success: false, message: 'Viewing failed. The id provided is an invalid ObjectId.' });
	}
}

export function updateResult(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.resultId)){
		CharitableResult.update({_id: req.params.resultId}, req.body, (err, result) => {
			if(err) throw err
			res.json(result)
		});
	} else {
		return res.json({ success: false, message: 'Updating failed. The id provided is an invalid ObjectId.' });
	}
}

export function deleteResult(req, res){
	if(mongoose.Types.ObjectId.isValid(req.params.resultId)){
		CharitableResult.remove({_id: req.params.resultId}, (err, result) => {
			if(err) throw err
			res.json(result)
		});
	} else {
		return res.json({ success: false, message: 'Deleting failed. The id provided is an invalid ObjectId.' });
	}
}

export function listResults(req, res){
	CharitableResult.find((err, results) => {
    //TODO - return binary of photo
		if(err) throw err
		res.json(results)
	});
}

function validateRequest(req, res){

  if(req.body.title == null || req.body.title == ''){
    res.json({ success: false, message: 'Fail. title must be provided.' });
    return false;
  } 

  if(req.body.description == null || req.body.description == ''){
    res.json({ success: false, message: 'Fail. description must be provided.' });
    return false;
  } 

  if(req.body.charitableEntityId == null || req.body.charitableEntityId == ''){
    res.json({ success: false, message: 'Fail. charitableEntityId must be provided.' });
    return false;
  }

  if(req.body.charitableEventId == null || req.body.charitableEventId == ''){
    res.json({ success: false, message: 'Fail. charitableEventId must be provided.' });
    return false;
  }

  if(req.body.createdByUserId == null || req.body.createdByUserId == ''){
    res.json({ success: false, message: 'Fail. createdByUserId must be provided.' });
    return false;
  }

  return true;
}