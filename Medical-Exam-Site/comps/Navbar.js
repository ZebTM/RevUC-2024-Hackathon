import Link from 'next/link'

const Navbar = () => {
    return(
        <nav>
            <ul classaName="flex space-x-4">
                <li className="mb-4 hover:underline underline-offset-4 text-left w-44 inline"> <Link href="/"> Home </Link> </li>
                <li className="mb-4 hover:underline underline-offset-4 text-left w-44 inline"> <Link href="/login"> Login </Link> </li>
                <li className="mb-4 hover:underline underline-offset-4 text-left w-44 inline"> <Link href="/medical_form"> Medical Form </Link> </li>
                <li className="mb-4 hover:underline underline-offset-4 text-left w-44 inline"> <Link href="/form_results"> Form Results </Link> </li>
            </ul>
        </nav>
    );
};

export default Navbar;