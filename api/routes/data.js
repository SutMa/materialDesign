const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');

router.get('/data/get', (req, res, next) => {

    const { psi, conductiveFiller, cementType, scms } = req.query;
    const pythonProcess = spawn('python', ['dataAnalysis/scipt_here.py', psi, conductiveFiller, cementType, scms]);
    let result = '';

    pythonProcess.stdout.on('data', (data) => {
        result += data.toString();
       
    })

    pythonProcess.stdout.on('close', (code) =>{
        if (code ===0){
            const output = JSON.parse(result);

            const resultObject = {
                "gaugeFactor": output.gaugeFactor,
                "mixtureDesign": {
                    "weight_perCubicYard": output.weight,
                    "conductiveFiller%": output.conductiveFiller,
                    "scm_%": output.scms

                }
            }

            const jsonString = JSON.stringify(resultObject);
            res.json(jsonString);
        }else{
            console.error("Python Script Failed")
            res.status(500).json({error: 'data analysis failed'})
        }
    })

})

