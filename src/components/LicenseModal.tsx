"use client";

import { useState, useEffect, useCallback } from "react";

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LICENSE_TEXT = `Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.
"License" shall mean the terms and conditions for use, reproduction,
and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by
the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all
other entities that control, are controlled by, or are under common
control with that entity.

"You" (or "Your") shall mean an individual or Legal Entity
exercising permissions granted by this License.

2. Grant of Copyright License.
Each Contributor hereby grants to You a perpetual, worldwide,
non-exclusive, no-charge, royalty-free, irrevocable copyright license
to reproduce, prepare Derivative Works of, publicly display, publicly
perform, sublicense, and distribute the Work.

3. Grant of Patent License.
Each Contributor hereby grants to You a perpetual, worldwide,
non-exclusive, no-charge, royalty-free, irrevocable patent license
to make, have made, use, offer to sell, sell, import, and otherwise
transfer the Work.

4. Redistribution.
You may reproduce and distribute copies of the Work or Derivative
Works thereof in any medium, with or without modifications, provided
that You meet the following conditions:
(a) You must give any other recipients a copy of this License;
(b) You must cause any modified files to carry prominent notices;
(c) You must retain all copyright, patent, trademark, and attribution
    notices from the Source form of the Work.

5. Submission of Contributions.
Any Contribution intentionally submitted for inclusion in the Work
shall be under the terms and conditions of this License.

6. Trademarks.
This License does not grant permission to use the trade names,
trademarks, service marks, or product names of the Licensor.

7. Disclaimer of Warranty.
Licensor provides the Work on an "AS IS" BASIS, WITHOUT WARRANTIES
OR CONDITIONS OF ANY KIND, either express or implied.

8. Limitation of Liability.
In no event shall any Contributor be liable to You for damages
arising as a result of this License or out of the use of the Work.

END OF TERMS AND CONDITIONS`;

export default function LicenseModal({ isOpen, onClose }: LicenseModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      onClose();
      setIsAnimating(false);
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-all duration-300 ${
        isOpen && !isAnimating
          ? "bg-ink/60 backdrop-blur-sm opacity-100"
          : "bg-ink/0 backdrop-blur-none opacity-0"
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Apache License 2.0"
    >
      <div
        className={`w-full max-w-3xl max-h-[85vh] bg-bone arch-border flex flex-col transition-all duration-300 ${
          isOpen && !isAnimating
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-[0.98]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-6 md:p-8 arch-border-b">
          <div>
            <h3 className="font-serif italic text-2xl md:text-3xl">Apache License 2.0</h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-klein-blue mt-1">
              Legal Framework Reference
            </p>
          </div>
          <button
            onClick={handleClose}
            className="font-mono text-[10px] uppercase tracking-widest text-ink/50 hover:text-klein-blue transition-colors flex items-center gap-1.5 group shrink-0 ml-4"
            aria-label="Close license modal"
          >
            Close
            <span className="text-lg leading-none group-hover:rotate-90 transition-transform duration-300">
              ×
            </span>
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto font-mono text-xs text-ink/70 leading-relaxed whitespace-pre-wrap flex-grow">
          {LICENSE_TEXT}
        </div>

        <div className="px-6 md:px-8 py-4 arch-border-t flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-ink/40">
          <span>MIT License — © 2026 ArcleIntelligence</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}
