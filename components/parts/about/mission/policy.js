


import React, { useContext } from "react";
import Title from "../../text/title";
import PolicyEntity from "@/entity/policyEntity";
import FileDownloads from "../../files/downloads";
import CustomImage from "../../image/CustomImage";
import Section from "../../section";

export default function Policy({ policy, locale="ja" }) {
  let entity = new PolicyEntity(policy, locale == "ja")

  return (
    <Section>
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
            <CustomImage src={entity.image} alt="Policy" addClass="md:col-start-1" />
            <div className="flex flex-col items-center text-center ">
                <Title title={entity.title} />
                <FileDownloads filePath={entity.pdf} title={""} />
            </div>
        </div>
      </div>
    </Section>
  );
}