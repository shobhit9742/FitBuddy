import React from "react";
import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import axios from "axios";
import "./Exercises.css";

const Exercises = () => {
  const [bodyParts, setBodyParts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const options = {
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        headers: {
          "x-rapidapi-key":
            "df0b759747msh16637e9e36fa127p11a076jsne34f895ad6bb",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setBodyParts(response.data);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    fetchBodyParts();
  }, []);

  const fetchExercises = async (bodyPart) => {
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      headers: {
        "x-rapidapi-key": "df0b759747msh16637e9e36fa127p11a076jsne34f895ad6bb",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setExercises(response.data);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  const handleBodyPartClick = (bodyPart) => {
    setSelectedBodyPart(bodyPart);
    fetchExercises(bodyPart);
  };

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      <ul id="exUL">
        <div id="exName">
          {bodyParts.map((bodyPart, index) => (
            <li
              key={index}
              onClick={() => handleBodyPartClick(bodyPart)}
              className={
                bodyPart === selectedBodyPart ? "selected" : "unselected"
              }
            >
              {bodyPart.toUpperCase()}
            </li>
          ))}
        </div>
      </ul>
      {selectedBodyPart && (
        <div>
          <h2 style={{ marginLeft: "80px" }}>
            Exercises for {selectedBodyPart.toUpperCase()}:
          </h2>

          <div id="ulExampleBodyPart">
            {exercises.map((exercise, index) => (
              <div className="bodyExerciseList" key={index}>
                <div className="imageDiv">
                  <img src={exercise.gifUrl} alt={exercise.name} />
                </div>
                <div className="nameIntruction">
                  <div className="exerName">
                    <h2 key={index}>{exercise.name.toUpperCase()}</h2>
                  </div>
                  <div className="targettedMuscle">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <h4 style={{ fontWeight: "bold" }}>
                        Target Muscles : &nbsp;
                      </h4>
                      {exercise.target.toUpperCase()};
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <h4 style={{ fontWeight: "bold" }}>Equipment : &nbsp;</h4>
                      {exercise.equipment.toUpperCase()}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <h4 style={{ fontWeight: "bold" }}>
                        Secondary Muscles : &nbsp;
                      </h4>
                      {exercise.secondaryMuscles.map((muscles) => (
                        <p key={muscles.id}>{muscles.toUpperCase()}, &nbsp;</p>
                      ))}
                    </div>
                  </div>
                  <div className="accordian">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography>Instructions</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          style={{ textAlign: "left", textWrap: "wrap" }}
                        >
                          {exercise.instructions.map((para, index) => (
                            <p key={index}>
                              {index + 1}. {para}
                            </p>
                          ))}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
                {/* equipment // gifUrl // instructions //target // secondaryMuscles*/}
              </div>

              // console.log(exercise)
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercises;
