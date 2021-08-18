
// import the requirments

const question = require('../../database/question');
const answer = require('../../database/answer');

// home route

exports.home = (req,res) => {
    res.render('home.pug',{show : "undefined"})

}
// faq route

exports.faq = (req,res) => {
    

    question.find().then((data)=>{
        answer.find().then((ans)=>{
            res.render('faq.pug',{ques : data,answer : ans})
        })

    })

    
}

//post question

exports.postQuestion = async (req,res)=>{

    console.log(req.body.question)

    if(req.body.question == "")
    {
        res.render('home.pug',{show : true})
    }
    else{

    let data = question({
        Question : req.body.question
    })
    
    await data.save().then((data)=>{
        res.redirect('/faq')
    }).catch((err)=>{
        console.log(err);
    })
}

}

//post answer

exports.postAnswer = async (req,res)=>{
    let data = answer({
        QuesId : req.params.id,
        Answer : req.body.Answer
    })
    
    await data.save().then((data)=>{
        // console.log(data);
        res.redirect('/faq')
    }).catch((err)=>{
        console.log(err);
    })

}

// for deleteing the question

exports.delete = (req,res)=>{
    question.deleteOne({_id : req.params.id}).then((data)=>{
        console.log(data.deletedCount);
        answer.deleteMany({QuesId :req.params.id}).then((data)=>{
            console.log(data.deletedCount);
            res.redirect("/faq")
        })
    })

}

//edit 

exports.edit = (req,res)=>{

    if(req.params.newQ == "")
    {
        res.render("faq.pug");
    }
    
    question.findOne({_id : req.params.preQ}).then((data)=>{
        console.log(data)
        
           data.Question = req.params.newQ + " ?";
        data.save().then(()=>{
            res.redirect('/faq');
        })
        })
    }

