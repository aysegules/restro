import { Plus, X } from "lucide-react";
import { faqs } from "../data/data";
import Animated from "./Animated";

const FAQs = () => {
  return (
    <section id="faq" className="px-auto mt-44">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <Animated delay={0.2}>
            <p className="text-orange-500 font-medium uppercase mb-3.5">FAQ</p>
          </Animated>

          <Animated delay={0.2}>
            <h2 className="text-4xl md:text-5xl max-w-xl mx-auto text-balance capitalize">
              Frequently Asked Questions
            </h2>
          </Animated>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Animated key={index} delay={index * 0.1} y={150}>
              <details
                key={index}
                className="border border-slate-200 text-zinc-500 rounded-lg p-5 hover:bg-slate-50/50 transition-colors group"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none   text-zinc-600">
                  {faq.question}
                  <span className="size-7 rounded-full bg-black/5 grid place-content-center shrink-0 text-zinc-400">
                    <Plus className="group-open:hidden" />
                    <X className="hidden group-open:block" />
                  </span>
                </summary>
                <p className="text-zinc-400">{faq.answer}</p>
              </details>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
