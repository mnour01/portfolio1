export const personalInfo = {
  name: "Mehdi Nour",
  location: "Paris, France",
  email: "nour.mehdi@yahoo.com",
  // github: "https://github.com/mnour01",
  linkedin: "https://www.linkedin.com/in/nour-mehdi/",
};

export const workExperience = [
  {
    company: "ENI Plénitude",
    location: "Levallois, France",
    position: "Lead Data",
    period: "Oct 2023 - Aujourd'hui",
    contexte: [
      "Dans un contexte d’amélioration continue des processus métiers, la mission vise à optimiser le parcours client B2B à travers l’automatisation, la supervision des traitements de données et la modernisation de l’infrastructure technique.",
      "Le rôle inclut également le pilotage des projets data en collaboration avec les équipes métier, de la définition des besoins jusqu’à la mise en œuvre des solutions, ainsi que la responsabilité de Tech Lead et référent technique au sein de l’équipe Business Intelligence.",
      "",
    ],
    role: [
      "●	Analyse approfondie du processus d’activation des contrats B2B afin d’identifier les points de blocage et réduire les délais de traitement.",
      "●	Automatisation de l’intégration des nouveaux contrats dans le CRM (SAP) afin de réduire les coûts opérationnels et améliorer la productivité.",
      "●	Développement d’un modèle de prévision des volumes d’appels clients en utilisant la bibliothèque Prophet de Python pour optimiser la gestion budgétaire des prestataires.",
      "●	Migration des traitements automatisés vers la plateforme cloud Azure Databriks dans une logique d’industrialisation et de scalabilité.",
      "●	Mise en place d’une solution de supervision des traitements automatisés assurant la qualité et la fiabilité des données transmises aux équipes métiers.",
      "●	Accompagnement des métiers dans la formalisation de leurs besoins, le cadrage des projets et la conduite du changement pour garantir l’adoption des solutions déployées.",
      "●	Proposition d’architectures et de solutions techniques robustes, adaptées aux enjeux métiers, en tant que référent technique et garant des bonnes pratiques au sein de l’équipe BI.",
    ],
  },
  
  {
    company: "EDF",
    location: "Colombes, France",
    position: "Data scientist",
    period: "Oct 2021 - Août 2023",
    contexte: [
      "Renforcer la connaissance client dans le marché d’affaires EDF via la production de bases de données stratégiques, la modélisation prédictive et le développement d’applications data.",
    ],
    role: [
      "●	Conception et mise à jour d’un datamart centralisé à partir de sources multiples (Hive, Oracle), servant de référentiel pour l’analyse des données clients PRO.",
      "●	Élaboration d’un modèle de prédiction du churn sous Python, basé sur Random Forest, intégrant des modules d’interprétabilité pour répondre aux exigences de transparence des modèles IA.",
      "●	Création d’applications interactives avec R Shiny pour cartographier les projets EDF, visualiser les indicateurs de déploiement Linky/Gazpar et enrichir l’expérience utilisateur via des contenus dynamiques.",
      "●	Suivi de l’utilisation des applications grâce à l’intégration de l’outil Matomo, via des scripts adaptés aux environnements Shiny et Dash.",
      "●	Intégration de la librairie Eurybia pour la supervision et le monitoring des modèles de machine learning en production.",

    ],
  },
  {
    company: "Bouygues Télécom",
    location: "Meudon, France",
    position: "Data Analyst",
    period: "Oct 2023 - Aujourd'hui",
    contexte: [
      "Optimisation de la qualité de service des accès fixes pour améliorer la performance réseau et anticiper les incidents techniques rencontrés par les clients.",
    ],
    role: [
      "●	Conception d’un KPI de qualité réseau (note de continuité xDSL), permettant d’identifier les coupures de service avec une granularité à la seconde, et de détecter les causes techniques en croisant plusieurs sources.",
      "●	Développement d’algorithmes d’aide à la décision pour optimiser le débit des lignes xDSL stables (analyse de données itérative, recommandations de modifications techniques).",
      "●	Mise en place de pipelines de données automatisés en PySpark pour alimenter des tableaux de bord de supervision, avec intégration des alertes en cas de dégradation des KPI.",
      "●	Suivi des effets des évolutions techniques sur les KPI (firmwares FTTH, équipements) à travers une chaîne de traitement industrialisée.",
      "●	Validation de la plateforme Big Data (Cloudera) et intégration de nouveaux modules de traitement en assurant la cohérence avec les bonnes pratiques de gouvernance des données.",
    ],
  },
];



export const skills = {
  programmingLanguages: [
    "R",
    // "(dplyr, data.table, ggplot2, plotly, leaflet, shiny)",
    "Python",
    // "(pandas, numpy, ploty, scikit-learn, xgboost, prophet, fastapi, psycopg2, streamlit, dash)",
    "Pyspark",
    "SQL",
  ],
  DataScience: [
    "Machine Learning",
    "Time Series Analysis",
    "Deep Learning",
    "Natural Language Processing",
  ],
  Datavis: [
    "Tableau",
    "Power BI",
    "Superset",
    "R Shiny",
    "Dash",
    "Streamlit",
    "SAP",
  ],

  databaseAndStorage: [
    "PostgreSQL", 
    "Oracle",
    "Hive",
    "Parquet",
    "Hbase",
  ],
  cloudAndDevOps: [
    "S3",
    "Azure Databricks",
    "Git",
    "CI/CD",
    "Docker",
    "Kubernetes",
  ],
  IAGEN: [
    "Intégration d'agents IA",
    "LangChain",
    "RAG",
    "Hugging Face (Ollama, OpenAI, Mistral, Claude)",
  ],
  SoftSkills: [
    "Pilotage de projets data",
    "recueil des besoins",
    "cadrage",
    "mise en œuvre",
    "Méthodologies Agile",
    "Supervision et traçabilité",
    "Communication transverse",  
  ],
};

export const education = [
  {
    institution: "Université de Clermont-Auvergne, Faculté des sciences Blaise Pascal",
    location: "Clermont-Ferrand, France",
    degree: "Master 2 en Analyses statistiques, Data science et Big Data",
    period: "Sep 2016 - Sep 2018",
    achievements: [
      "Probabilté et Statistiques",
      "G20 student Prcessus stochastiques",
      "Big Data (Map Reduce et Spark)",
      "Machine Learning et Deep Learning",
      "R, SAS et Python",
      "Bases de données (SQL, NoSQL)",
    ],
  },
  {
    institution: "Université Hassan II, Faculté des sciences de Casablanca",
    location: "Casablanca, Maroc",
    degree: "Licences en Mathématiques appliquées",
    period: "Sep 2012 - Sep 2016",
    achievements: [
      "Probabilités et économetrie",
      "Equations différentielles et systèmes dynamiques",
      "Analyse Statistique de Données, Statistiques Inférentielles",
      "Algèbre, Intégration et Topologie",
      "C, C++, R",
    ],
  },
];

// export const projects = [
//   {
//     title: "Net Zero Carbon Emissions",
//     github: "https://github.com/rishikesh2003/Prodigi",
//     description: [
//       "WiFi-RTT: Developed indoor occupancy tracking for energy optimization.",
//       "IoT Solutions: Implemented smart monitoring for energy efficiency and food waste reduction.",
//       "Real-Time Tracking: Designed systems to monitor carbon emissions and optimize resources.",
//       "Data-Driven Insights: Analyzed user patterns for adaptive energy and food management.",
//       "Reward Integration: Built QR-based green points system to incentivize eco-friendly actions.",
//     ],
//   },
//   {
//     title: "Mental Aarog",
//     github: "https://github.com/rishikesh2003/mental-aarog",
//     description: [
//       "A holistic mental health app leveraging AI and blockchain for early detection and personalized solutions for depression.",
//       "Features include social media analysis (ML-based sentiment tracking), PHQ-9 assessments, smartwatch integration for sleep and activity data, guided meditation, and smart suggestions for food, travel, music, and movies.",
//       "Developed a rewards system using MAG crypto token on Ethereum, enabling user engagement through in-app incentives.",
//       "Secure storage implemented via web3.storage, IPFS, and FileCoin.",
//       "Built with React, Supabase, Node.js, Flask, and Solidity, showcasing seamless integration of health tech and blockchain.",
//     ],
//   },
// ];

// export const awards = [
//   {
//     name: "IEEE YESIST12 Hackathon",
//     issuer: "IEEE",
//     date: "Sep 2022",
//     type: "International",
//     position: "Second Place",
//   },
//   {
//     name: "Prodigi Cognizant Hackathon",
//     issuer: "Cognizant",
//     date: "Feb 2023",
//     type: "National",
//     position: "Second Runner-up",
//   },
// ];
