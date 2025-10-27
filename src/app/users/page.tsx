import { Button } from "@/components/ui/button";
import MyTabs from "@/shadCN/MyTabs";


export default function Users () {
    return(
        <>
            <div>

                <div>User Management</div>
                
                <div>
                    <MyTabs/>

                    {/* IMPORT DOWNLOAD BUTTON */}
                    <button>Export users</button>
                </div>

                <div>
                    {/* IMPORT FILTER ICON */}
                    <input type="text" placeholder="Filter Users      Access Level" />
                    {/* IMPORT DROPDOWN ICON AND X FRO CANCEL */}
                </div>

                <div>
                    Total
                    {/* Show NUMBER OF Items listed here */}

                    <Button>Summary</Button>

                    <Button>Add Users</Button>
                </div>


                <div>
                    <div>
                        {/* ADD CHECKBOX */}

                        {/* ALSO ADD  AROW TOP ICON*/}

                        <p>Name</p>

                        <p>Access Level</p>

                        <p>Date Added</p>

                        <p>Last Accessed</p>
                    </div>

                    <div>
                        <div>
                            <p>Adeyemo M. Samson</p>
                            <p>sams.adeyemo@outlook.com</p>
                        </div>

                        <p>Basic</p>

                        <p>1/21/2023</p>

                        4/16/2023
                    </div>

                </div>


                <div>
                    <div>
                        {/* ADD CHECKBOX */}

                        {/* ALSO ADD  AROW TOP ICON*/}

                        <p>Name</p>

                        <p>Access Level</p>

                        <p>Date Added</p>

                        <p>Last Accessed</p>
                    </div>

                    <div>
                        <div>
                            <p>Ideazhub Solutions</p>
                            <p>zedfinancial@outlook.com</p>
                        </div>

                        <p>Basic</p>

                        <p>11/22/2020</p>

                        <p>4/19/2023</p>
                    </div>

                </div>

                <div>
                    <div>
                        {/* ADD CHECKBOX */}

                        {/* ALSO ADD  AROW TOP ICON*/}

                        <p>Name</p>

                        <p>Access Level</p>

                        <p>Date Added</p>

                        <p>Last Accessed</p>
                    </div>

                    <div>
                        <div>
                            <p>Prolean Financials</p>
                            <p>proleanfinancials@gmail.com</p>
                        </div>

                        <p>Basic</p>

                        <p>2/16/2021</p>

                        <p>4/16/2021</p>
                    </div>

                </div>


                <div>
                    <div>
                        {/* ADD CHECKBOX */}

                        {/* ALSO ADD  AROW TOP ICON*/}

                        <p>Name</p>

                        <p>Access Level</p>

                        <p>Date Added</p>

                        <p>Last Accessed</p>
                    </div>

                    <div>
                        <div>
                            <p>Samson M. Adeyemo</p>
                            <p>sams.adeyemo@gmail.com</p>
                        </div>

                        <p>Stakeholder</p>

                        <p>1/21/2023</p>

                        <p>4/16/2023</p>
                    </div>



                </div>

                <div>
                    <div>
                        {/* ADD CHECKBOX */}

                        {/* ALSO ADD  AROW TOP ICON*/}

                        <p>Name</p>

                        <p>Access Level</p>

                        <p>Date Added</p>

                        <p>Last Accessed</p>
                    </div>

                    <div>
                        <div>
                            <p>Jude Biose</p>
                            <p>judebiose@gmail.com</p>
                        </div>

                        <p>Stakeholder</p>

                        <p>3/1/2021</p>

                        <p>3/30/2023</p>
                    </div>



                </div>

                <div>
                    <div>
                        {/* ADD CHECKBOX */}

                        {/* ALSO ADD  AROW TOP ICON*/}

                        <p>Name</p>

                        <p>Access Level</p>

                        <p>Date Added</p>

                        <p>Last Accessed</p>
                    </div>

                    <div>
                        <div>
                            <p>raimaliu428</p>
                            <p>raimaliu428@gmail.com</p>
                        </div>

                        <p>Basic</p>

                        <p>12/5/2021</p>

                        <p>4/3/2023</p>
                    </div>



                </div>

                <div>
                    <div>
                        {/* ADD CHECKBOX */}

                        {/* ALSO ADD  AROW TOP ICON*/}

                        <p>Name</p>

                        <p>Access Level</p>

                        <p>Date Added</p>

                        <p>Last Accessed</p>
                    </div>

                    <div>
                        <div>
                            <p>tolulope@mofuba.io</p>
                            <p>tolulope@mofuba.io</p>
                        </div>

                        <p>Stakeholder</p>

                        <p>4/11/2021</p>

                        <p>Never</p>
                    </div>

                    {/* ADD THREE DOT ICON FOR MORE FEATURES */}

                </div>





            </div>
            
        </>
    )
}