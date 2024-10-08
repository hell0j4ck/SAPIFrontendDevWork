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
        const filePath = await response.text()
        const link = document.createElement('a')
        link.href = `http://localhost:3002${filePath}`
        link.target='_blank'
        document.body.appendChild(link);
        link.click()
        
        return true

    } else {

        throw ({ error: 'Something went wrong' })
    }

}
