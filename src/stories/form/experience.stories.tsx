import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Experience } from "../../components/user/publicProfile";
export default {
  title: "Form/Experience ",
  component: Experience,
} as ComponentMeta<typeof Experience>;

const Template: ComponentStory<typeof Experience> = (args) => (
  <Experience {...args} />
);
export const DefaultState = Template.bind({});

DefaultState.args = {
  className: "w-[550px]",
  title: {
    content: "Experience",
  },
  body: [
    {
      title: "Art Director - UX/UI",
      companyName: "White Stork",
      duration: "Jul 2016 — 2018 ‘ 2 yrs 2 mos",
      location: "Michigan, USA",
      discription:
        "Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and interpersonal skills; dynamic team player with well- developed wri en and verbal communica on abili es.Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and",
    },
    {
      title: "Art Director - UX/UI",
      companyName: "White Stork",
      duration: "Jul 2016 — 2018 ‘ 2 yrs 2 mos",
      location: "Michigan, USA",
      discription:
        "Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and interpersonal skills; dynamic team player with well- developed wri en and verbal communica on abili es.Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and",
    },
    {
      title: "Art Director - UX/UI",
      companyName: "White Stork",
      duration: "Jul 2016 — 2018 ‘ 2 yrs 2 mos",
      location: "Michigan, USA",
      discription:
        "Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and interpersonal skills; dynamic team player with well- developed wri en and verbal communica on abili es.Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and",
    },
    {
      title: "Art Director - UX/UI",
      companyName: "White Stork",
      duration: "Jul 2016 — 2018 ‘ 2 yrs 2 mos",
      location: "Michigan, USA",
      discription:
        "Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and interpersonal skills; dynamic team player with well- developed wri en and verbal communica on abili es.Highly crea ve and mul talented Graphic Designer with extensive experience in mul media, marke ng and print design. Excep onal and",
    },
  ],
};
