import Awards from "@/components/home/Awards";
import Demo from "@/components/home/Demo";
import Hero from "@/components/home/Hero";
import Programs from "@/components/home/Programs";
import SchoolPartners from "@/components/home/SchoolPartners";
import SchoolSoftware from "@/components/home/SchoolSoftware";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Programs/>
     <SchoolSoftware/>
     <SchoolPartners/>
     <Testimonial/>
     <Awards/>
     <Demo/>
    </div>
  );
}
