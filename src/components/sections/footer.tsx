"use client";

import { useState } from "react";

const Footer = () => {
  const [licenseModalOpen, setLicenseModalOpen] = useState(false);

  return (
    <>
      <footer className="arch-border-t bg-bone pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none opacity-[0.03]">
          <span className="font-sans font-bold text-[25vw] whitespace-nowrap">ARC</span>
        </div>

        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 relative z-10">
          <div className="max-w-sm">
            <div className="font-serif text-3xl italic tracking-tight font-semibold flex items-baseline gap-2 mb-6">
              Arcle{" "}
              <span className="text-sm font-sans not-italic font-bold tracking-widest uppercase text-klein-blue">
                Intelligence
              </span>
            </div>
            <p className="font-mono text-sm text-ink/60 leading-relaxed mb-8">
              Autonomous, local, absolute privacy. The terminal for the next era of high-performance
              computing and personal AI.
            </p>
            <div className="flex gap-4 font-mono text-xs uppercase tracking-widest">
              <a
                href="#"
                className="hover:text-klein-blue transition-colors pb-1 border-b border-transparent hover:border-klein-blue"
              >
                YouTube
              </a>
              <a
                href="#"
                className="hover:text-klein-blue transition-colors pb-1 border-b border-transparent hover:border-klein-blue"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-klein-blue transition-colors pb-1 border-b border-transparent hover:border-klein-blue"
              >
                X (Twitter)
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 font-mono text-sm">
            <div className="flex flex-col gap-4">
              <span className="text-xs text-ink/40 uppercase tracking-widest mb-2">Directory</span>
              <a href="#features" className="hover:text-klein-blue transition-colors">
                Features
              </a>
              <a href="#matrix" className="hover:text-klein-blue transition-colors">
                Data Matrix
              </a>
              <a href="#donate" className="hover:text-klein-blue transition-colors">
                Support
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs text-ink/40 uppercase tracking-widest mb-2">
                Legal / Ops
              </span>
              <a
                href="mailto:support@arcintelligence.com"
                className="hover:text-klein-blue transition-colors"
              >
                Contact Support
              </a>
              <button
                onClick={() => setLicenseModalOpen(true)}
                className="text-left hover:text-klein-blue transition-colors"
              >
                View License
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto arch-border-t mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs uppercase tracking-widest text-ink/50 relative z-10">
          <p>Built by ArcleIntelligence © 2026</p>
          <p>© All Rights Reserved</p>
        </div>
      </footer>

      {licenseModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-bone/90 backdrop-blur-sm p-4 md:p-12 flex items-center justify-center"
          onClick={() => setLicenseModalOpen(false)}
        >
          <div
            className="arch-border bg-white w-full max-w-4xl max-h-[90vh] flex flex-col relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLicenseModalOpen(false)}
              className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest text-ink hover:text-klein-blue transition-colors flex items-center gap-2 group z-10 bg-white px-2"
            >
              Close <span className="text-lg leading-none group-hover:rotate-90 transition-transform">×</span>
            </button>
            <div className="p-8 md:p-12 border-b border-ink/10">
              <h3 className="font-serif italic text-3xl">Apache License 2.0</h3>
              <div className="font-mono text-xs uppercase tracking-widest text-klein-blue mt-2">
                Legal Framework Reference
              </div>
            </div>
            <div className="p-8 md:p-12 overflow-y-auto font-mono text-xs md:text-sm text-ink/70 leading-relaxed whitespace-pre-wrap">
              Apache License
              Version 2.0, January 2004
              http://www.apache.org/licenses/

              TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

              1. Definitions.
              &quot;License&quot; shall mean the terms and conditions for use, reproduction,
              and distribution as defined by Sections 1 through 9 of this document.

              &quot;Licensor&quot; shall mean the copyright owner or entity authorized by
              the copyright owner that is granting the License.

              &quot;Legal Entity&quot; shall mean the union of the acting entity and all
              other entities that control, are controlled by, or are under common
              control with that entity. For the purposes of this definition,
              &quot;control&quot; means (i) the power, direct or indirect, to cause the
              direction or management of such entity, whether by contract or
              otherwise, or (ii) ownership of fifty percent (50%) or more of the
              outstanding shares, or (iii) beneficial ownership of such entity.

              &quot;You&quot; (or &quot;Your&quot;) shall mean an individual or Legal Entity
              exercising permissions granted by this License.

              &quot;Source&quot; form shall mean the preferred form for making modifications,
              including but not limited to software source code, documentation
              source, and configuration files.

              &quot;Object&quot; form shall mean any form resulting from mechanical
              transformation or translation of a Source form, including but
              not limited to compiled object code, generated documentation,
              and conversions to other media types.

              &quot;Work&quot; shall mean the work of authorship, whether in Source or
              Object form, made available under the License, as indicated by a
              copyright notice that is included in or attached to the work.

              &quot;Derivative Works&quot; shall mean any work, whether in Source or Object
              form, that is based on (or derived from) the Work and for which the
              editorial revisions, annotations, elaborations, or other modifications
              represent, as a whole, an original work of authorship.

              &quot;Contribution&quot; shall mean any work of authorship, including
              the original version of the Work and any modifications or additions
              to that Work or Derivative Works thereof, that is intentionally
              submitted to Licensor for inclusion in the Work by the copyright owner.

              2. Grant of Copyright License. Subject to the terms and conditions of
              this License, each Contributor hereby grants to You a perpetual,
              worldwide, non-exclusive, no-charge, royalty-free, irrevocable
              copyright license to reproduce, prepare Derivative Works of,
              publicly display, publicly perform, sublicense, and distribute
              the Work and such Derivative Works in Source or Object form.

              3. Grant of Patent License. Subject to the terms and conditions of
              this License, each Contributor hereby grants to You a perpetual,
              worldwide, non-exclusive, no-charge, royalty-free, irrevocable
              (except as stated in this section) patent license to make, have made,
              use, offer to sell, sell, import, and otherwise transfer the Work.

              4. Redistribution. You may reproduce and distribute copies of the
              Work or Derivative Works thereof in any medium, with or without
              modifications, and in Source or Object form, provided that You
              meet the following conditions:
              (a) You must give any other recipients of the Work or
              Derivative Works a copy of this License; and
              (b) You must cause any modified files to carry prominent notices
              stating that You changed the files; and
              (c) You must retain, in the Source form of any Derivative Works
              that You distribute, all copyright, patent, trademark, and
              attribution notices from the Source form of the Work.

              5. Submission of Contributions. Unless You explicitly state otherwise,
              any Contribution intentionally submitted for inclusion in the Work
              by You to the Licensor shall be under the terms and conditions of
              this License, without any additional terms or conditions.

              6. Trademarks. This License does not grant permission to use the trade
              names, trademarks, service marks, or product names of the Licensor.

              7. Disclaimer of Warranty. Unless required by applicable law or
              agreed to in writing, Licensor provides the Work (and each
              Contributor provides its Contributions) on an &quot;AS IS&quot; BASIS,
              WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
              implied, including, without limitation, any warranties or conditions
              of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
              PARTICULAR PURPOSE.

              8. Limitation of Liability. In no event and under no legal theory,
              whether in tort (including negligence), contract, or otherwise,
              unless required by applicable law (such as deliberate and grossly
              negligent acts) or agreed to in writing, shall any Contributor be
              liable to You for damages, including any direct, indirect, special,
              incidental, or consequential damages of any character arising as a
              result of this License or out of the use or inability to use the
              Work.

              END OF TERMS AND CONDITIONS
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;