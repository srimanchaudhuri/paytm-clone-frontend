export default function({labelName, placeholder, id, onChange}) {
    return <div className="mt-4">
            <label for={id} class="block mb-2 text-sm font-semibold text-gray-900">{labelName}</label>
            <input onChange={onChange} type="text" id={id} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none  block w-full p-2.5" placeholder={placeholder} required />
        </div>
}