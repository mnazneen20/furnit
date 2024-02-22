import React from 'react'
import ss from '../../assets/squarespace.svg'
import docu from '../../assets/docu.svg'
import braze from '../../assets/braze.svg'
import att from '../../assets/attentive.svg'
import opendoor from '../../assets/opendoor.svg'
import sq from '../../assets/square.svg'

const Partners = () => {
    const partners = [
        {
            name: 'squarespace',
            src: ss
        },
        {
            name: 'docusign',
            src: docu
        },
        {
            name: 'braze',
            src: braze
        },
        {
            name: 'attentive',
            src: att
        },
        {
            name: 'opendoor',
            src: opendoor
        },
        {
            name: 'square',
            src: sq
        }
    ]
    return (
        <div className='my-20 bg-black text-white text-center'>
            <p className='pt-10'>Various brands have used our products</p>
            <div className='flex gap-10 justify-center py-10'>
                {
                    partners.map(m => (
                        <img key={m.name} src={m.src} alt={m.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Partners