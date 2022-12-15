const locations = {
    Atki: {
        name: "Atkins Library",
        lat: 35.305746,
        lng: -80.732146
    },
    Duke: {
        name: "Duke Centennial Hall",
        lat: 35.311927,
        lng: -80.741154
    },
    StuU: {
        name: "Popp Martin Student Union",
        lat: 35.308603,
        lng: -80.733723
    },
    AtkiG: {
        name: "Atkins Library - Ground",
        lat: 35.305991,
        lng: -80.732742
    },
    StuUM: {
        name: "Student Union - Middle",
        lat: 35.307846,
        lng: -80.733711
    },
    Kenn: {
        name: "Kennedy",
        lat: 35.305969,
        lng: -80.730933
    },
    Cato: {
        name: "Cato College of Education",
        lat: 35.305434,
        lng: -80.728730
    },
    Scie: {
        name: "Science Building",
        lat: 35.308482,
        lng: -80.730029
    },
    Moto: {
        name: "Motorsports Research",
        lat: 35.312614,
        lng: -80.740266
    },
    AtkiL: {
        name: "Atkins Library - Lower",
        lat: 35.305667,
        lng: -80.731668
    },
    McEn: {
        name: "McEniry",
        lat: 35.307097,
        lng: -80.730157
    },
    EXT: {
        name: "Bissel House - Exit",
        lat: 35.301056,
        lng: -80.738977
    },
    Biss: {
        name: "Bissel House - Chancellor's Residence",
        lat: 35.301056,
        lng: -80.738977
    },
    LibW: {
        name: "Atkins Library - Walkway",
        lat: 35.304879,
        lng: -80.732245
    },
    Rees: {
        name: "Reese",
        lat: 35.3046865,
        lng: -80.7325075
    },
    Fret: {
        name: "Fretwell",
        lat: 35.30609617329542,
        lng: -80.72905836119102
    },
    Scot: {
        name: "Scott Hall",
        lat: 35.301745442516655,
        lng: -80.73536472973072
    },
    HunH: {
        name: "Hunt Hall",
        lat: 35.3014512904921,
        lng: -80.73649720639536
    },
    Foun: {
        name: "Foundation",
        lat: 35.29794910569405,
        lng: -80.73691568215568
    },
    Colv: {
        name: "Colvard",
        lat: 35.3047288,
        lng: -80.7318175
    },
    Gari: {
        name: "Garinger",
        lat: 35.30501426437236,
        lng: -80.73020795332306
    },
    MilH: {
        name: "Miltmore Hall",
        lat: 35.31120445845271,
        lng: -80.73546086850881
    },
    Cone: {
        name: "Cone University Center",
        lat: 35.30539145277517,
        lng: -80.73321607933849
    },
    King: {
        name: "King",
        lat: 35.305075897472854,
        lng: -80.73257741691799
    },
    CoEd: {
        name: "Cato College of Education",
        lat: 35.30759045861732,
        lng: -80.73413267874088
    },
    Levi: {
        name: "Levine Hall",
        lat: 35.302890925010665,
        lng: -80.73313648024713
    },
    Grig: {
        name: "Grigg Hall",
        lat: 35.31128413499671,
        lng: -80.7418437948065
    },
    BelGPool: {
        name: "Belk Gym Pool",
        lat: 35.30533877292375,
        lng: -80.73559950455898
    },
    BursBOIL: {
        name: "Burson Boiler Building",
        lat: 35.30739649766536,
        lng: -80.7323005232744
    },
    Came: {
        name: "Cameron Hall",
        lat: 35.30766893240503,
        lng: -80.73125757789353
    },
    BelH: {
        name: "Belk Hall",
        lat: 35.31020420511571,
        lng: -80.73513844953378
    },
    Stor: {
        name: "Storrs",
        lat: 35.30457871751996,
        lng: -80.72920178915456
    },
    BURS: {
        name: "Burson",
        lat: 35.30739649766536,
        lng: -80.7323005232744
    },
    Smit: {
        name: "Smith",
        lat: 35.30694979430145,
        lng: -80.73154882607298
    },
    Winn: {
        name: "Winningham",
        lat: 35.30510282119657,
        lng: -80.73044941939384
    },
    Faci: {
        name: "Facilities Management",
        lat: 35.312010426369376,
        lng: -80.73049088977476
    },
    EPIC: {
        name: "EPIC",
        lat: 35.31189811943846,
        lng: -80.74119004392253
    },
    PORT: {
        name: "PORTAL",
        lat: 35.311692789354176,
        lng: -80.74298916559158
    },
    MSII: {
        name: "Military Science",
        lat: 35.303758090594165,
        lng: -80.73590696050901
    },
    Tenn: {
        name: "Halton-Wagner Tennis Complex",
        lat: 35.307403467038604,
        lng: -80.73740777078115
    },
    BaTF: {
        name: "Transamerica Field - Baseball",
        lat: 35.30811487469631,
        lng: -80.73903712726472
    },
    StuH: {
        name: "Student Health Center",
        lat: 35.3105524918975,
        lng: -80.72958746698107
    },
    CenC: {
        name: "Center City Building",
        lat: 35.22837561149495,
        lng: -80.83494731884977
    },
    Bioi: {
        name: "Bioinformatics",
        lat: 35.3125545,
        lng: -80.741512
    },
    Auxi: {
        name: "Auxiliary Services Building",
        lat: 35.30766993673688,
        lng: -80.73048107918797
    },
    Pros: {
        name: "Prospector",
        lat: 35.306545047508436,
        lng: -80.73089474281956
    },
    Wach: {
        name: "Wachovia Lot",
        lat: 35.30674961000998,
        lng: -80.73789627786617
    },
    RUP: {
        name: "Regional Utility Plant",
        lat: 35.30034922462913,
        lng: -80.73550624762174
    },
    Rece: {
        name: "Receiving & Stores",
        lat: 35.31429031164012,
        lng: -80.73383991982728
    },
    Hick: {
        name: "Hickory Hall",
        lat: 35.30920918659618,
        lng: -80.72900305289947
    },
    EPICG: {
        name: "EPIC - Ground",
        lat: 35.30893850523969,
        lng: -80.74144019949817
    },
    MiltA: {
        name: "Miltmore Hall",
        lat: 35.311110707418734,
        lng: -80.73541348525717
    },
    Wood: {
        name: "Woodward",
        lat: 35.30714938477803,
        lng: -80.73571149971485
    },
    Irwi: {
        name: "Irwin Belk Track and Field",
        lat: 35.3055340318995,
        lng: -80.73760639279563
    },
    Heal: {
        name: "College of Health & Human Services",
        lat: 35.30740406450089,
        lng: -80.73336972100714
    },
    Syca: {
        name: "Sycamore Hall",
        lat: 35.308845791469416,
        lng: -80.72899591410679
    },
    BelG: {
        name: "Belk Gym",
        lat: 35.30536214924615,
        lng: -80.73561251662721
    },
    Wall: {
        name: "Wallis Hall",
        lat: 35.31147075717193,
        lng: -80.73396322431611
    },
    Harr: {
        name: "Harris Alumni Center",
        lat: 35.30273474608917,
        lng: -80.73870538593044
    },
    Robi: {
        name: "Robinson Hall",
        lat: 35.30375735741013,
        lng: -80.72992203994481
    },
    Rowe: {
        name: "Rowe",
        lat: 35.30444513210468,
        lng: -80.7308401321233
    },
    Lync: {
        name: "Lynch Hall",
        lat: 35.310200558605175,
        lng: -80.73371371440811
    },
    Memo: {
        name: "Memorial Hall",
        lat: 35.30373048465129,
        lng: -80.73589463996213
    },
    UREC: {
        name: "University Recreation Center",
        lat: 35.30831292797602,
        lng: -80.73541667969782
    },
    StuA: {
        name: "Student Activity Center",
        lat: 35.30625938227615,
        lng: -80.73445998972124
    },
    Gage: {
        name: "Gage Undergraduate Admissions",
        lat: 35.30111581484298,
        lng: -80.733002577923
    },
    Hous: {
        name: "Housing and Residence Life",
        lat: 35.30211038685805,
        lng: -80.73360840569094
    },
    SVDH: {
        name: "South Village Dining Hall - SoVi",
        lat: 35.302832777094864,
        lng: -80.7349231756767
    },
    SoTF: {
        name: "Transamerica Field - Soccer",
        lat: 35.30556073286457,
        lng: -80.73762479072461
    },
    McCoC: {
        name: "McColl-Richardson Field - Concessions",
        lat: 35.31045181086794,
        lng: -80.74011182694231
    },
    GRIG: {
        name: "Grigg Hall",
        lat: 35.31125721169039,
        lng: -80.74183274370174
    },
    Denn: {
        name: "Denny",
        lat: 35.30533295968176,
        lng: -80.72980795887034
    },
    Unio: {
        name: "Union Deck",
        lat: 35.30915355927649,
        lng: -80.73522839767031
    },
    With: {
        name: "Witherspoon Hall",
        lat: 35.31091281659303,
        lng: -80.73230276211463
    },
    Frid: {
        name: "Friday",
        lat: 35.30628511732297,
        lng: -80.72997554801233
    },
    Mart: {
        name: "Martin Hall",
        lat: 35.30993975891089,
        lng: -80.72745035992615
    },
    Macy: {
        name: "Macy",
        lat: 35.305738003574184,
        lng: -80.73047515456338
    },
    Coun: {
        name: "Price Counseling Center",
        lat: 35.310251760035584,
        lng: -80.73006844660692
    },
    Cafe: {
        name: "Cafeteria Activities Building",
        lat: 35.30905807801118,
        lng: -80.72819881504607
    },
    Ceda: {
        name: "Cedar Hall",
        lat: 35.3095532,
        lng: -80.7289938
    },
    FOPS: {
        name: "Facilities Operations & Parking Services",
        lat: 35.314182346671856,
        lng: -80.73272456401536
    },
    Laur: {
        name: "Laurel Hall",
        lat: 35.302517699178985,
        lng: -80.73595446556496
    },
    NERF: {
        name: "Northeast Recreational Field Complex",
        lat: 35.31344100794077,
        lng: -80.72319983871316
    },
    Phil: {
        name: "D.L Phillips Complex",
        lat: 35.30683657536748,
        lng: -80.7397596328187
    },
    FouA: {
        name: "Foundation Annex",
        lat: 35.2981335,
        lng: -80.7360096
    },
    McMi: {
        name: "McMillan Greenhouse",
        lat: 35.3078127,
        lng: -80.7297808
    },
    Band: {
        name: "Johnson Band Center",
        lat: 35.307240,
        lng: -80.729310
    },
    BandCor: {
        name: "Johnson Band Center - Corridor",
        lat: 35.307240,
        lng: -80.729310
    },
    FaciA: {
        name: "Facilities Management",
        lat: 35.314100,
        lng: -80.732600
    },
    Barn: {
        name: "Barnard",
        lat: 35.305800,
        lng: -80.730030
    },
    FacA: {
        name: "Facilities Management",
        lat: 35.314100,
        lng: -80.732600
    },
    BelGMain: {
        name: "Belk Gym - Main",
        lat: 35.30533877292375,
        lng: -80.73559950455898
    },
    EHS: {
        name: "Environmental Health & Safety",
        lat: 35.312660,
        lng: -80.730080
    },
    JBui: {
        name: "Facilities Annex One - J-Building",
        lat: 35.312074673261264,
        lng: -80.73049956290934
    },
    McCo: {
        name: "McColl-Richardson Field",
        lat: 35.31061414580404,
        lng: -80.74024765706898
    },
    Nine: {
        name: "Niner House",
        lat: 35.30411966275528,
        lng: -80.72776917094374
    },
    Burs: {
        name: "Burson",
        lat: 35.30739649766536,
        lng: -80.7323005232744
    },
    BelGGym: {
        name: "Belk Gym - Gymnasium",
        lat: 35.30533877292375,
        lng: -80.73559950455898
    },
    East: {
        name: "East Deck",
        lat: 35.30538120328745,
        lng: -80.72684464471652
    },
    BelGRB: {
        name: "Belk Gym - Raquetball",
        lat: 35.30533877292375,
        lng: -80.73559950455898
    },
    CRI: {
        name: "CRI Deck",
        lat: 35.3092259550927,
        lng: -80.74338910878436
    },
    BioiVEST: {
        name: "Bioinformatics",
        lat: 35.3125545,
        lng: -80.741512
    }
}

module.exports = {
    locations
}
