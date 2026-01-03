import React from 'react';

const FAQ = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Frequently Asked <span className="text-orange-600">Questions</span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
                    Everything you need to know about adopting or listing on PawMart.
                </p>

                <div className="space-y-4">
                    <div className="collapse collapse-plus rounded-xl shadow">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-semibold">Is adoption really free?</div>
                        <div className="collapse-content">
                            <p>Many pets are listed for free adoption! Some may have a small rehoming fee to cover vaccinations or care costs.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus rounded-xl shadow">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-semibold">How do I know the pet is healthy?</div>
                        <div className="collapse-content">
                            <p>Sellers usually provide health records. We recommend meeting the pet and asking for vet documents.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus rounded-xl shadow">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-semibold">Can I list my pet for adoption?</div>
                        <div className="collapse-content">
                            <p>Yes! Registered users can create listings easily from their dashboard.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus rounded-xl shadow">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-semibold">Is PawMart safe?</div>
                        <div className="collapse-content">
                            <p>We encourage safe meet-ups in public places and direct communication between buyers and sellers.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus rounded-xl shadow">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-semibold">Do you deliver pets?</div>
                        <div className="collapse-content">
                            <p>No, all adoptions and purchases are local pick-up arranged between you and the seller.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus rounded-xl shadow">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-semibold">Can I return a pet?</div>
                        <div className="collapse-content">
                            <p>We encourage responsible adoption. Returns depend on agreement with the seller.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;