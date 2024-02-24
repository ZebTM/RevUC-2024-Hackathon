import Navbar from '../comps/navbar'
export default function medical_form() {
    return (
      <div>
        <Navbar />
        <form>
          <label for="fname">First Name: </label> 
          <br></br>
          <input type="text" id="fname" name="fname"></input>
          <br></br>
          <label for="lname">Last Name: </label>
          <br></br>
          <input type="text" id="lname" name="lname"></input>
          <br></br>
          <label for="symptoms">Symptoms: </label>
          <br></br>
          <textarea name="symptoms" rows="10" cols="25"></textarea>
          <br></br>
          <label for="notes">Additional Notes: </label>
          <br></br>
          <textarea name="notes" rows="10" cols="25"></textarea>
          <br></br>
          <label for="file">Upload Files Here: </label>
          <br></br>
          <input id="file" name="file" type="file" />
          <br></br>
          <br></br>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
  