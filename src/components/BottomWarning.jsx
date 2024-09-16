import { Link } from "react-router-dom";

export default function({to, warningText, linkText}) {
    return <div className=" font-semibold text-sm text-slate-700 mb-4 mt-2">
        {warningText} <Link className=" underline" to={to}>{linkText}</Link>
    </div>
}