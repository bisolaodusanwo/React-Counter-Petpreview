/* eslint-disable react/prop-types */
import styled from "styled-components"

const Wrapper = styled.div `
 padding: 24px;
 width: 40vw;
 height: 100vh;
 broder-left: 1px solid #ccc;

 .imageContainer {
 display: flex;
 max-width: 100%;
 overflow-x: auto;
 border: 2px solid #ccc;
 padding: 8px;
 border-radius:8px;
 
 img {
  width: 200px;
  height: 200px
 }
 }

 .petContent {
 margin-top:24px;
 border: 1px solid #ccc;
 border-radius: 8px;
 padding:24px;
  
 .petDetail {
 display: flex;
 justify-content: space-between;
 padding: 12px 0;
 border-bottom: 1px solid #ccc;
 }
 }
 }
`;

const PreviewPets = (props) => {
    const { petPreview: pet } = props
    console.log("petPreview", pet)
  return (
    <Wrapper>
        <h3>Previewing {pet?.name}</h3>

        <div>
            <div className="imageContainer">
              {pet?.images?.map((img, idx) => (
                <img key={idx} src={img} alt={pet?.name} />
              ))}
            </div>

            <div className="petContent">
                <div className="petDetail"> 
                    <h3>Pet name</h3>
                    <h3>{pet?.name}</h3>
                </div>
                <div className="petDetail">
                    <h3>Pet breed</h3>
                    <h3>{pet?.breed}</h3>
                </div>
                <div className="petDetail">
                    <h3>Pet animal</h3>
                    <h3>{pet?.animal}</h3>
                </div>
                <div className="petDetail">
                    <h3>Pet city</h3>
                    <h3>{pet?.city}</h3>
                </div>
            </div>
        </div>
         </Wrapper>
  )
}

export default PreviewPets