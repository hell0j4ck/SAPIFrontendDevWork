import { backend_ip, hostOriginHeader } from "../../apiconfig.json"

export async function getFile(format, url) {

    const response = await fetch(`${backend_ip}/${format}?url=${url}`, {

        method: 'GET',
        headers: {

            'Origin-Host': hostOriginHeader,
        }



    })


    if (response.ok) {

        console.log("Success!")

        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        document.body.appendChild(link);
        link.click()
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        return blob

    } else {

        throw ({ error: 'Something went wrong' })
    }

}
