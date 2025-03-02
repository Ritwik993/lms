"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"

export default function QuizModal({questions}: {questions: []}) {
  const [open, setOpen] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  if (questions.length<0) return <div>No pdf uploaded</div>;

  console.log("questions = "+questions);
  const quizData={
    questions:[...questions]
  } 



//   const quizData = {
//     questions: [
//       {
//         question: "1. What is the currency of the United Kingdom?",
//         options: [
//           {
//             name: "a) Euro",
//             _id: "67bf582d28529821a5bd67f4",
//           },
//           {
//             name: "b) Pound Sterling",
//             _id: "67bf582d28529821a5bd67f5",
//           },
//           {
//             name: "c) Dollar",
//             _id: "67bf582d28529821a5bd67f6",
//           },
//           {
//             name: "d) Yen",
//             _id: "67bf582d28529821a5bd67f7",
//           },
//         ],
//         correctAns: "b) Pound Sterling",
//         _id: "67bf582d28529821a5bd67f3",
//       },
//       {
//         question: "2. Who painted the Mona Lisa?",
//         options: [
//           {
//             name: "a) Vincent van Gogh",
//             _id: "67bf582d28529821a5bd67f9",
//           },
//           {
//             name: "b) Leonardo da Vinci",
//             _id: "67bf582d28529821a5bd67fa",
//           },
//           {
//             name: "c) Pablo Picasso",
//             _id: "67bf582d28529821a5bd67fb",
//           },
//           {
//             name: "d) Michelangelo",
//             _id: "67bf582d28529821a5bd67fc",
//           },
//         ],
//         correctAns: "b) Leonardo da Vinci",
//         _id: "67bf582d28529821a5bd67f8",
//       },
//       {
//         question: "3. What is the smallest unit of matter?",
//         options: [
//           {
//             name: "a) Atom",
//             _id: "67bf582d28529821a5bd67fe",
//           },
//           {
//             name: "b) Molecule",
//             _id: "67bf582d28529821a5bd67ff",
//           },
//           {
//             name: "c) Electron",
//             _id: "67bf582d28529821a5bd6800",
//           },
//           {
//             name: "d) Proton",
//             _id: "67bf582d28529821a5bd6801",
//           },
//         ],
//         correctAns: "a) Atom",
//         _id: "67bf582d28529821a5bd67fd",
//       },
//       {
//         question: "4. Which is the longest river in the world?",
//         options: [
//           {
//             name: "a) Amazon River",
//             _id: "67bf582d28529821a5bd6803",
//           },
//           {
//             name: "b) Nile River",
//             _id: "67bf582d28529821a5bd6804",
//           },
//           {
//             name: "c) Yangtze River",
//             _id: "67bf582d28529821a5bd6805",
//           },
//           {
//             name: "d) Mississippi River",
//             _id: "67bf582d28529821a5bd6806",
//           },
//         ],
//         correctAns: "b) Nile River",
//         _id: "67bf582d28529821a5bd6802",
//       },
//       {
//         question: "5. In which year did World War II end?",
//         options: [
//           {
//             name: "a) 1942",
//             _id: "67bf582d28529821a5bd6808",
//           },
//           {
//             name: "b) 1945",
//             _id: "67bf582d28529821a5bd6809",
//           },
//           {
//             name: "c) 1950",
//             _id: "67bf582d28529821a5bd680a",
//           },
//           {
//             name: "d) 1939",
//             _id: "67bf582d28529821a5bd680b",
//           },
//         ],
//         correctAns: "b) 1945",
//         _id: "67bf582d28529821a5bd6807",
//       },
//       {
//         question: "6. What is the powerhouse of the cell?",
//         options: [
//           {
//             name: "a) Nucleus",
//             _id: "67bf582d28529821a5bd680d",
//           },
//           {
//             name: "b) Mitochondria",
//             _id: "67bf582d28529821a5bd680e",
//           },
//           {
//             name: "c) Ribosome",
//             _id: "67bf582d28529821a5bd680f",
//           },
//           {
//             name: "d) Golgi Apparatus",
//             _id: "67bf582d28529821a5bd6810",
//           },
//         ],
//         correctAns: "b) Mitochondria",
//         _id: "67bf582d28529821a5bd680c",
//       },
//       {
//         question: "7. Which country is known as the Land of the Rising Sun?",
//         options: [
//           {
//             name: "a) China",
//             _id: "67bf582d28529821a5bd6812",
//           },
//           {
//             name: "b) Japan",
//             _id: "67bf582d28529821a5bd6813",
//           },
//           {
//             name: "c) India",
//             _id: "67bf582d28529821a5bd6814",
//           },
//           {
//             name: "d) South Korea",
//             _id: "67bf582d28529821a5bd6815",
//           },
//         ],
//         correctAns: "b) Japan",
//         _id: "67bf582d28529821a5bd6811",
//       },
//       {
//         question: "8. How many bones are there in the adult human body?",
//         options: [
//           {
//             name: "a) 200",
//             _id: "67bf582d28529821a5bd6817",
//           },
//           {
//             name: "b) 206",
//             _id: "67bf582d28529821a5bd6818",
//           },
//           {
//             name: "c) 212",
//             _id: "67bf582d28529821a5bd6819",
//           },
//           {
//             name: "d) 218",
//             _id: "67bf582d28529821a5bd681a",
//           },
//         ],
//         correctAns: "b) 206",
//         _id: "67bf582d28529821a5bd6816",
//       },
//       {
//         question: "9. Who invented the telephone?",
//         options: [
//           {
//             name: "a) Thomas Edison",
//             _id: "67bf582d28529821a5bd681c",
//           },
//           {
//             name: "b) Alexander Graham Bell",
//             _id: "67bf582d28529821a5bd681d",
//           },
//           {
//             name: "c) Nikola Tesla",
//             _id: "67bf582d28529821a5bd681e",
//           },
//           {
//             name: "d) Guglielmo Marconi",
//             _id: "67bf582d28529821a5bd681f",
//           },
//         ],
//         correctAns: "b) Alexander Graham Bell",
//         _id: "67bf582d28529821a5bd681b",
//       },
//       {
//         question: "10. What is the main gas found in the Earth's atmosphere?",
//         options: [
//           {
//             name: "a) Oxygen",
//             _id: "67bf582d28529821a5bd6821",
//           },
//           {
//             name: "b) Carbon Dioxide",
//             _id: "67bf582d28529821a5bd6822",
//           },
//           {
//             name: "c) Nitrogen",
//             _id: "67bf582d28529821a5bd6823",
//           },
//           {
//             name: "d) Hydrogen",
//             _id: "67bf582d28529821a5bd6824",
//           },
//         ],
//         correctAns: "c) Nitrogen",
//         _id: "67bf582d28529821a5bd6820",
//       },
//     ],
//   }

  const currentQuestion = quizData.questions[currentQuestionIndex]
  const totalQuestions = quizData.questions.length

  const goToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  return (
    <div className="flex items-center justify-center p-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="lg" className="font-medium bg-blue-500 hover:bg-blue-300">
            View Pdf
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{currentQuestion?.question}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-3">
            {currentQuestion?.options.map((option) => (
              <div
                key={option._id}
                className={`p-3 rounded-lg border ${
                  option.name === currentQuestion?.correctAns
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                    : "border-gray-200 dark:border-gray-800"
                } flex items-center justify-between`}
              >
                <span>{option.name}</span>
                {option.name === currentQuestion?.correctAns && <Check className="h-5 w-5 text-green-500" />}
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Correct answer: {currentQuestion?.correctAns}</p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <Button variant="outline" size="icon" onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous question</span>
            </Button>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNextQuestion}
              disabled={currentQuestionIndex === totalQuestions - 1}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next question</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

