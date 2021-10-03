import { Router } from 'express';
import Entry from '../models/Entry.js'

const router = Router();

//CREATE ENTRY
router.post("/", async (req, res) => {
    const newEntry = new Entry(req.body);
    try{
        const savedEntry = await newEntry.save();
        res.status(200).json(savedEntry);
    }catch(err){
        res.status(500).json(err);
    }
})

//UPDATE ENTRY
router.put("/:id", async (req, res) => {
    try{
        const entry = await Entry.findById(req.params.id);
        if(entry.username === req.body.username) {
                try{
                    const updatedEntry = await Entry.findByIdAndUpdate(req.params.id, {
                        $set:req.body,
                    },
                    {new: true})
                    res.status(200).json(updatedEntry);
                }catch(err){
                    res.status(500).json(err);
                }
        } else{
            res.status(401).json("You can update only your entry!")
        }
    }catch(err){
        res.status(500).json(err);
    }
})

//DELETE POST
router.delete("/:id", async (req, res) => {
    try{
        const entry = await Entry.findById(req.params.id);
        if(entry.username === req.body.username) {
                try{
                    await entry.delete();
                    res.status(200).json("Entry has been deleted");
                }catch(err){
                    res.status(500).json(err);
                }
        } else{
            res.status(401).json("You can delete only your entry!")
        }
    }catch(err){
        res.status(500).json(err);
    }
})
//GET ENTRY
router.get("/:id", async (req, res) => {
    try{
        const entry = await Entry.findById(req.params.id);
        res.status(200).json(post);
    }catch(err) {
        res.status(500).json(err)
    }
})

//GET ALL ENTRIES
router.get("/", async (req, res) => {
    const username = req.body.username;
    try{
        let entries;
        if(username) {
            entries = await Entry.find({
                username,
            })
        } else {
            entries = await Entry.find();
        }
        res.status(200).json(entries);
    } catch(err){
        res.status(500).json(err);
    }

})

// //GET ALL MONTH ENTRIES
// router.get("/", async (req, res) => {
//     const username = req.query.user;
//     const month = req.query.month;
//     const year = req.query.year;
//     try{
//         let entries;
//         if(username && month && year){
//             const start = new Date(year, month, 1);
//             const end = new Date(year, month+1, 0)
//             entries = await Entry.find({
//                 username, 
//                 date: {
//                     $gte: start, 
//                     $lte: end,
//                 }
//             });
//         }
//         res.status(200).json(posts);
//     }catch(err) {
//         res.status(500).json(err)
//     }
// })

export default router;