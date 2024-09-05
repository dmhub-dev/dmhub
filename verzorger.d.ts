type verzorger = {
    naam: string;
    werk: string;
    mail: string;
    slug: string;
    type: "verzorger"
}

type onderneming = {
    naam: string;
    slug: string;
    type: "onderneming"
}

type postcode = {
    city: city;
    id: number;
    lat: number;
    lng: number;
    postcode: string;
    slug: string;
    type: "postcode"
}

type city = {
    name: string;
    postcodes: postcode[];
    province: string;
    slug: string;
    id: number;
    type: "city"
}