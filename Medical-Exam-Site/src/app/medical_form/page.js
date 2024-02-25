export default function medical_form() {
    return (
      <div className="flex justify-center pt-8 pb-8">
        <form className="w-1/2 bg-slate-800 pl-14 pr-14 pt-4 rounded-xl">
          <label for="symptoms">Symptoms: </label>
          <br></br>
          <textarea name="symptoms" rows="10" cols="25" className="text-black rounded-xl"></textarea>
          <br></br>
          <label for="notes">Additional Notes: </label>
          <br></br>
          <textarea name="notes" rows="10" cols="25" className="text-black rounded-xl"></textarea>
          <br></br>
          <label for="file">Upload Files Here: </label>
          <br></br>
          <input id="file" name="file" type="file" />
          <br></br>
          <br></br>
          <input type="submit" className="pb-8" />
        </form>
      </div>
    );
  }
  