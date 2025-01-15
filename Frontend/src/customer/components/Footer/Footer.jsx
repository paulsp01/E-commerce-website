import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="font-sans tracking-wide bg-[#213343] pt-12 pb-4 px-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        <div>
          <h4 class="text-[#FFA726] font-semibold text-lg mb-6">Company</h4>
          <ul class="space-y-5">
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">About</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Blog</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Jobs</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Press</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Partners</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-[#FFA726] font-semibold text-lg mb-6">Solution</h4>
          <ul class="space-y-5">
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Marketing</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Analytics</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Commerce</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Insights</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Support</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-[#FFA726] font-semibold text-lg mb-6">Documentation</h4>
          <ul class="space-y-5">
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Guides</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">API Status</a>
            </li>
           
          </ul>
        </div>

        <div>
          <h4 class="text-[#FFA726] font-semibold text-lg mb-6">Legal</h4>
          <ul class="space-y-5">
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Claim</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Privacy</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Contact</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Terms & Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t text-center border-[#6b5f5f] pt-4 mt-8">
        <p class="text-gray-300 text-[15px]">
          © 2025 My Company. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}   

export default Footer