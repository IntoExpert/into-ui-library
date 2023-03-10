import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "../../components/user/titleDescription/rowTable/table/table";
import { TitleAndTable } from "../../components/user/titleDescription/rowTable/titleDescriptionTable";
export default {
  title: "Form/table form",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  className: "",
  title: {
    content: "Experience",
  },
  body: [
    {
      title: "Art Director - UX/UI",
      subTitle: "White Stork",
      description: "Jul 2019 — Present ‘ 2 yrs 2 mos",
      anotherDescription: "Beirut, Lebanon",
      coloumn:
        " Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and interpersonal skills; dynamic team player with well- developed wri en and verbal communica on abili es.Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and",
    },

    {
      title: "Graphic Designer",
      subTitle: "Cogent So ech",
      description: "Jul 2016 — 2018 ‘ 2 yrs 2 mos",
      anotherDescription: "Michigan, USA",
      coloumn:
        "Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and interpersonal skills; dynamic team player with well- developed wri en and verbal communica on abili es.",
    },
    {
      title: "Graphic Designer",
      subTitle: "We Agency",
      description: "Jul 2015 — 2016 ‘ 1 yrs",
      anotherDescription: "Beirut, Lebanon",
      coloumn:
        "Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and interpersonal skills; dynamic team player with well- developed wri en and verbal communica on abili es.Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and",
    },
  ],
};
