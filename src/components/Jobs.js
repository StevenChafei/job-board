import Job from "./Job";

const Jobs = (props) => {
  return (
    <main>
      <Job
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sidney"
        className="red"
      />
      <Job
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
        className="green"
      />
      <Job
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
        className="yellow"
      />
      <Job
        title="Chef de projets"
        contractType="CDD"
        country="France"
        city="Paris"
        className="blue"
      />
      <Job
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
        className="pink"
      />
      <Job
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="France"
        city="Paris"
        className="red"
      />
      <Job
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montana"
        className="green"
      />
      <Job
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New-York"
        className="yellow"
      />
      <Job
        title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
        className="blue"
      />
    </main>
  );
};

export default Jobs;
