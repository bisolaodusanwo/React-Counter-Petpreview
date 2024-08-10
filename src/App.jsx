/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import PreviewPets from "./Component/PreviewPets";
import Button from "./Component/Button";

const Wrapper = styled.div`
  display: flex;

  .petListContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 24px;
    height: 100vh;
    overflow-y: auto;
  }
`;

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 300px;
  height: 370px;

  .imageContainer {
    width: 100%;
    height: 60%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }
  }

  .textBody {
    padding: 8px;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      font-size: 20px;
      margin: 2px 0;
    }

    p {
      max-width: 100%;
      overflow-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 92%;
    }

    .previewBtn {
    height: 36px;
    border: none;
    border-radius: 8px
    }
  }
`;

function App() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [petPreview, setPetPreview] = useState({})

  const fetchPets = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://pets-v2.dev-apis.com/pets");
      const data = await res.json();
      setPets(data.pets);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSetPreview = (pet) => {
    setPetPreview(pet);
  }
  useEffect(() => {
    fetchPets();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      <div className="petListContainer">
        {pets?.map((pet) => (
          <StyledCard>
            <div className="imageContainer">
              <img src={pet?.images[0]} alt="" />
            </div>

            <div className="textBody">
              <h2>{pet.name}</h2>
              <p>{pet?.description}</p>
              <Button text="Preview" bg="#344648" color="#fff" className="previewBtn" onClick={() => handleSetPreview(pet)}/>
            </div>
          </StyledCard>
        ))}
      </div>

      <PreviewPets petPreview={petPreview}/>
    </Wrapper>
  );
}

export default App;