import React from "react";
import todopic1 from "../todopic1.jpg";
export const About = () => {
  const displayFlex = {
    display: "flex",
    marginBottom: "50px",
    justifyContent: "spaceBetween",
    lineHeight: "30px",
    marginTop: "50px",
  };

  return (
    <div className="text-left mx-5">
      <h3 className="text-light my-4">
        <u>About Todo List</u>
      </h3>
      <p>
        What is a ToDo List? The definition is a simple one. It’s a list of
        tasks you need to complete, or things that you want to do. Most
        typically, they’re organised in order of priority. Traditionally,
        they’re written on a piece of paper or post it notes and acts as a
        memory aid. As technology has evolved we have been able to create a todo
        lists with excel spreadsheets, word documents, email lists, todo list
        apps, microsoft to do and google to do list to name a few. You can use a
        to do list in your home and personal life, or in the workplace. Having a
        list of everything you need to do written down in one place means you
        shouldn’t forget anything important. By prioritising the tasks in the
        list you plan the order in which you’re going to do them and can quickly
        see what needs your immediate attention and what tasks you can leave
        until a little later.
      </p>
      <div style={displayFlex}>
        <ul>
          <h4 className="text-decoration-overline">
            The Benefits of Using a To Do List
          </h4>
          <li>
            Improves your memory: A to do list acts as an external memory aid.
            It’s only possible to hold a few pieces of information at one time.
            Keep a to do list and you’ll be able to keep track of everything,
            rather than just a few of the tasks you need to do. Your to do list
            will also reinforce the information, which makes it less likely
            you’re going to forget something.
          </li>
          <li>
            Increases productivity: A to do list allows you to prioritize the
            tasks that are more important. This means you don’t waste time on
            tasks that don’t require your immediate attention. Your list will
            help you stay focused on the tasks that are the most important.
          </li>
          <li>
            Helps with motivation: To do lists are a great motivational tool
            because you can use them to clarify your goals. You can divide your
            long-term goal into smaller, more achievable short-term goals and as
            you tick each one off your list, your confidence will increase.
          </li>
        </ul>
        <img
          src={todopic1}
          height={400}
          width={650}
          className="ml-5 float-right"
          alt="todo image"
        />
      </div>
    </div>
  );
};
