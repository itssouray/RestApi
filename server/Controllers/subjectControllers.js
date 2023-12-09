const Language = require("../models/languageSchema")

exports.subjectpost = async(req,res)=>{
    const {subjectName,imgUrl,ratings,chapters} = req.body;

    const result = new Language({
        subjectName:subjectName,
        imgUrl:imgUrl,
        ratings:ratings,
        chapters:chapters[0]
    })

    console.log(subjectName,"  ",chapters[0]);

    result.save()
    .then(() => {
      res.json({ message: 'Data saved successfully!' });
    })

    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};


exports.languageget = async(req,res)=>{
    try {
        const languageData = await Language.find({});
        res.json(languageData);
      } catch (error) {
        console.error('Error fetching language data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};


exports.courseget = async(req,res)=>{
    try {
        const courseId = req.params.id;
        const course = await Language.findById(courseId);
        
        res.json(course);
      
      }catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}


exports.chapterpost = async(req,res)=>{
    const { languageId} = req.params;
  const newChapter = req.body;

  const language = await Language.findById(languageId);

  if (!language) {
    return res.status(404).json({ error: 'Language not found' });
  }
  newChapter.topic = [];

  language.chapters.push(newChapter);
  console.log(newChapter);
  language.markModified('chapters');
  await language.save();

  res.status(200).json({ message: 'Chapter added successfully' });

};


exports.topicput = async(req,res)=>{

  const { languageId, chapterIndex } = req.params;
  const newTopic = req.body;
  // console.log(newTopic)
  const language = await Language.findById(languageId);

  if (!language) {
    return res.status(404).json({ error: 'Language not found' });
  }

  const chapter = language.chapters[chapterIndex];
  // console.log("index : ",chapterIndex);

  if (!chapter) {
    return res.status(404).json({ error: 'Chapter not found' });
  }

  chapter.topic.push(newTopic)
  language.markModified('chapters');
  await language.save();

  res.status(200).json({ message: 'Topic added successfully' });

};