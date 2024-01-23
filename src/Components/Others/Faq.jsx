'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Faq() {
  const initialQuestions = [
    {
      id: 1,
      question: 'What cosmic force nudged me into the enchanting realm of Full Stack Development, you ask?',
      answer:
        'As someone who has always been captivated by the magic of creating things from the ground up and watching them dance to life on the web, being a Full Stack Developer is my playground of possibilities. Here, I get the exciting opportunity to weave my skills into both the user interface and the server-side logic, crafting comprehensive, end-to-end solutions. The icing on the cake? The perpetual learning adventure that comes with this role, making every coding journey remarkably rewarding!" 🌐✨',
      isCollapsed: true,
    },
    {
      id: 2,
      question: 'Ever wonder how I keep my web development mojo up to date?',
      answer:
        ' It\'s like doing a tech tango! I waltz through online communities, tango with tech blogs, and even salsa my way into conferences. Oh, and let\'s not forget the cha-cha of hands-on exploration, where I jitterbug into new technologies through quirky personal projects. Stay tuned for the web development dance of the century! 💃🕺🌐',
      isCollapsed: true,
    },
    {
      id: 3,
      question: 'What\'s your dream workspace ambiance and team dynamic, you ask?',
      answer: 'Well, picture a lively beehive of brilliance where creativity flows as smoothly as a perfectly brewed coffee. I thrive in a team dynamic that\'s more of a symphony – each member playing a unique instrument but harmonizing towards a shared goal. Think open communication, mutual respect, and just the right amount of humor. It\'s not just an office; it\'s a stage where we\'re all both performers and each other\'s biggest fans. Ready to join the workplace party?" 🎉🐝☕',
      isCollapsed: true,
    },
    {
      id: 4,
      question: '"What\'s the recipe for a top-notch Full Stack Developer, you ask? ',
      answer: 'Well, imagine a coding superhero with a cape made of caffeine molecules and a utility belt stocked with debugging gadgets. In this whimsical tech tale, the essential qualities include the finesse of a juggler (handling front-end and back-end like a pro) and the curiosity of a cat (because Google is a developer\'s best friend). Sprinkle in some teamwork spice, adaptability seasoning, and a dash of humor – and there you have it, the perfect blend for a code-wielding maestro! Ready to don the cape and embark on a coding adventure?',
      isCollapsed: true,
    },
    {
      id: 5,
      question: '"How do you stand out in the professional jungle of your field, you wonder?',
      answer: 'Picture this: I\'m the Tarzan of Tech, swinging through coding vines with a keyboard in hand and a perfectly timed joke ready to land. I\'m not just a Full Stack Developer; I\'m a code wizard with a hat full of debugging spells and a knack for turning bugs into unexpected features. So, what sets me apart from the pack? Think of it as a unique blend of tech prowess, creative flair, and the ability to make coding as entertaining as a three-ring circus. Ready for a tech adventure with a side of laughter?',
      isCollapsed: true,
    },
    {
      id: 6,
      question: 'Curious about the secret life outside the coding matrix?',
      answer: 'Well, hold on to your keyboard! When I\'m not unraveling the mysteries of algorithms, you might catch me taming wild coffee beans into the perfect brew or engaging in extreme bookshelf organizing – it\'s practically an Olympic sport. Picture a coding maestro with a side hustle in comedic juggling and a penchant for turning ordinary hobbies into extraordinary adventures. So, spill the beans, what are my hobbies and interests, you ask? Brace yourself for a rollercoaster of curiosity and a dash of humor!',
      isCollapsed: true,
    },
  ];

  const [questions, setQuestions] = useState(initialQuestions);

  const toggleCollapse = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].isCollapsed = !updatedQuestions[index].isCollapsed;
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      <h1 className="text-2xl font-medium my-5">People also ask</h1>
      <div>
        <ul>
          {questions.map((qa, index) => (
            <li key={qa.id}>
              <button
                className="w-full text-left py-3  border-t border-gray-300 flex justify-between"
                onClick={() => toggleCollapse(index)}
                type="button"
              >

                {qa.question}
                {qa.isCollapsed ? (
                  <Image
                    src="/down.PNG"
                    alt="profile-pic"
                    className="m-1"
                    width={25}
                    height={25}
                  />
                ) : (
                  <Image
                    src="/up.PNG"
                    alt="profile-pic"
                    className="m-1"
                    width={25}
                    height={25}
                  />
                ) }

              </button>
              <div
                className={`transition-all duration-300  ${
                  qa.isCollapsed ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3 max-h-96'
                } text-gray-600 rounded-md `}
              >
                <p>{qa.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
