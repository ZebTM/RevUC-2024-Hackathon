// import { NextResponse } from 'next/server';
// import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

// const GET = withApiAuthRequired(async function GET(req) {
//   const res = new NextResponse();
//   const { accessToken } = await getAccessToken(req, res);
//   return accessToken;
// });

// export { GET };

// async function createHeader() {
//   let x = await GET();
//   const header = {'Header': `Bearer ${x}`};
//   return header;
// }

// /status
export default async function MedicalForm() {
  //let headers = await createHeader();
  //let retval = await fetch("http://10.11.191.67:3001/status");
  return (
    <div className="flex justify-center pt-8 pb-8">
      <form className="w-1/2 bg-slate-800 pl-14 pr-14 pt-4 rounded-xl">
        <label htmlFor="symptoms">Symptoms: </label>
        <br></br>
        <textarea name="symptoms" rows="10" cols="25" className="text-black rounded-xl"></textarea>
        <br></br>
        <label htmlFor="notes">Additional Notes: </label>
        <br></br>
        <textarea name="notes" rows="10" cols="25" className="text-black rounded-xl"></textarea>
        <br></br>
        <label htmlFor="file">Upload Files Here: </label>
        <br></br>
        <input id="file" name="file" type="file" />
        <br></br>
        <br></br>
        <input type="submit" className="pb-8" />
      </form>
    </div>
  );
}

