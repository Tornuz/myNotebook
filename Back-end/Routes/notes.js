const express = require('express');
const router = express.Router()
const Notes = require('../Models/Notes');
var fetchuser = require('../middleware/fetchuser');
const {validationResult, body } = require('express-validator');


// ROUTE 1: Get All the Notes using: GET "/api/notes/fetchallnotes". Login required

router.get('/fetchallnotes',fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({user: req.user.id})
         res.json(notes)
    } catch (error) {
        console.error(err.message)
        res.status(500).send("Internal Server Error Occured")
    }
  })

  // ROUTE 2: Add a new Note using: POST "/api/notes/addnotes". Login required

router.post('/addnotes',fetchuser,[
    body('title','Enter a valid Name').isLength({min: 3}),
    body('description','description must be atLeast 5 characters').isLength({min: 5}),
], async (req, res) => {
try {
    const {title, description, tag} = req.body;
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).send({ errors: result.array()});
    }

    const note = new Notes({
        title, description, tag, user:req.user.id
    })
    const savedNote = await note.save()

    res.json(savedNote)

} catch (error) {
    console.error(err.message)
        res.status(500).send("Internal Server Error Occured")
    }
})


  // ROUTE 3`: Update an existing Note using: PUT "/api/notes/updatenote/id". Login required

  router.put('/updatenote/:id',fetchuser, async (req, res) => {
    const {title, description, tag} = req.body

    try {
    // Create a new Note Object
    const newNote = {}
    if(title){newNote.title = title}
    if(description){newNote.description = description}
    if(tag){newNote.tag = tag}

    // Find the note to be updated and update it
    let note = await Notes.findById(req.params.id)
    if(!note){return res.status(404).send("Not Found")}

    if(note.user.toString() !== req.user.id) {return res.status(401).send("Not Allowed")}

    note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
    res.json({note})
} catch (error) {
    console.error(err.message)
        res.status(500).send("Internal Server Error Occured")
    }
})

  // ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote/id". Login required

  router.delete('/deletenote/:id',fetchuser, async (req, res) => {

    try {
    // Find the note to be deleted and delete it
    let note = await Notes.findById(req.params.id)
    if(!note){return res.status(404).send("Not Found")}

    // Allow deletion only if user owns this Note
    if(note.user.toString() !== req.user.id) {return res.status(401).send("Not Allowed")}

    note = await Notes.findByIdAndDelete(req.params.id)
    res.json({"Succes": "Note has been deleted", note: note})
} catch (error) {
    console.error(err.message)
        res.status(500).send("Internal Server Error Occured")
    }
})


  module.exports = router;