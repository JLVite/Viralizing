import React from "react";
import {graphql} from "react-apollo";
import Loading from "../../../core/ui/components/loading";
import Payments from "../components/statement/payments/container";
import {createContainer} from "meteor/react-meteor-data";

import gql from "graphql-tag";


class EditContainer extends React.Component {
    render() {
        let {loading, refetch, paymentsOwn, updateMonth, updateYear, updateAccounts, year, month, accounts}=this.props;
        return (
            <div>
                {loading ? <Loading/> :
                    <Payments payments={paymentsOwn}
                              refetch={refetch}
                              year={year}
                              month={month}
                              accounts={accounts}
                              updateMonth={updateMonth}
                              updateYear={updateYear}
                              updateAccounts={updateAccounts}/>}
            </div>
        )
    }
}

const QUERY = gql`
    query ($year: String, $month: String, $accounts: [String]) {
        paymentsOwn(year: $year, month: $month, accounts: $accounts) {
            amount
            date,
            from{
                _id,
                profile{
                    name
                    lastName,
                    avatar
                }
            }
            to{
                _id,
                type,
                network,
                information{
                    name
                    lastName,
                    avatar
                }
            }
            type
            paymentMethod{
                brand,
                last4
            }
            status,
            type,
            campaign{
                _id,
                owner{
                    profile{
                        name,
                        lastName,
                        avatar
                    }
                }
                manager{
                    _id,
                    profile{
                        name,
                        lastName,
                        avatar
                    }
                }
                information{
                    name,
                    brands{
                        _id,
                        network,
                        information{
                            name,
                            lastName,
                            avatar
                        }
                    }
                }
            },
            post{
                _id,
                status,
                type,
                date,
                useHashtag,
                account{
                    _id,
                    name,
                    lastName,
                    avatar,
                    network,
                }
                data{
                    message,
                    media,
                    location
                }
            }
        }
    }

`;

const withData = graphql(QUERY, {
    props: ({data: {error, loading, paymentsOwn, refetch}}) => {
        if (loading) return {loading: true};
        if (error) return {hasErrors: true};
        return {
            loading,
            paymentsOwn,
            refetch,
        };
    },
    options: (ownProps) => (
        {
            variables: {
                year: ownProps.year,
                month: ownProps.month,
                accounts: ownProps.accounts
            }
        }
    ),
});

export default withData(EditContainer);