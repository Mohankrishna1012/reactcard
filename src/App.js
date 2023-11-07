import "./App.css";
import Card from "./Card";

function App() {
  const plan = [
    {
      price: "Free",
      period: "$0",
      month:"/Month",
      features: [
        {
          name: "Single User",
          enable: true,
        },
        {
          name: "50GB storage",
          enable: true,
        },
        {
          name: "Unlimited Public Projects",
          enable: true,
        },
        {
          name: "Community Access",
          enable: true,
        },
        {
          name: "Unlimited Private Projects",
          enable: false,
        },
        {
          name: "DedicatedPhone Support",
          enable: false,
        },
        {
          name: "Free Subdomain",
          enable: false,
        },
        {
          name: "Monthly StatusReports",
          enable: false,
        },
      ],
    },
    {
      price: "Plus",
      period: "$9",
      month:"/Month",
      features: [
        {
          name: "Single User",
          enable: true,
        },
        {
          name: "50GB storage",
          enable: true,
        },
        {
          name: "Unlimited Public Projects",
          enable: true,
        },
        {
          name: "Community Access",
          enable: true,
        },
        {
          name: "Unlimited Private Projects",
          enable: true,
        },
        {
          name: "DedicatedPhone Support",
          enable: true,
        },
        {
          name: "Free Subdomain",
          enable: true,
        },
        {
          name: "Monthly StatusReports",
          enable: false,
        },
      ],
    },
    {
      price: "Pro",
      period: "$49",
      month:"/Month",
      features: [
        {
          name: "Single User",
          enable: true,
        },
        {
          name: "50GB storage",
          enable: true,
        },
        {
          name: "Community Access",
          enable: true,
        },
        {
          name: "Unlimited Public Projects",
          enable: true,
        },
        {
          name: "Unlimited Private Projects",
          enable: true,
        },
        {
          name: "DedicatedPhone Support",
          enable: true,
        },
        {
          name: "Free Subdomain",
          enable: true,
        },
        {
          name: "Monthly StatusReports",
          enable: true,
        },
      ],
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">React Price Card Task</h1>
          </div>
        </div>
      </div>
      <div>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
              {plan.map((detail) => {
                return <Card details={detail}></Card>;
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
