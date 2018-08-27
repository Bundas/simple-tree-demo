// tslint:disable
// graphql typescript definitions

declare namespace GQL {
    interface IGraphQLResponseRoot {
        data?: IQuery | IMutation;
        errors?: Array<IGraphQLResponseError>;
    }

    interface IGraphQLResponseError {
        /** Required for all errors */
        message: string;
        locations?: Array<IGraphQLResponseErrorLocation>;
        /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
        [propName: string]: any;
    }

    interface IGraphQLResponseErrorLocation {
        line: number;
        column: number;
    }

    interface IQuery {
        __typename: 'Query';
        contracts: Array<IContract>;
    }

    interface IContract {
        __typename: 'Contract';
        id: string;
        createdAt: any;
        title: string;
        errorCount: number;
        wordCount: number;
        checked: boolean | null;
        submitter: ISubmitter;
        winners: Array<IWinner>;
    }

    interface ISubmitterOnContractArguments {
        where?: ISubmitterWhereInput | null;
    }

    interface IWinnersOnContractArguments {
        where?: IWinnerWhereInput | null;
        orderBy?: WinnerOrderByInput | null;
        skip?: number | null;
        after?: string | null;
        before?: string | null;
        first?: number | null;
        last?: number | null;
    }

    type Node = IContract | ISubmitter | IWinner;

    interface INode {
        __typename: 'Node';
        id: string;
    }

    interface ISubmitterWhereInput {
        AND: Array<ISubmitterWhereInput>;
        OR: Array<ISubmitterWhereInput>;
        NOT: Array<ISubmitterWhereInput>;
        id?: string | null;
        id_not?: string | null;
        id_in: Array<string>;
        id_not_in: Array<string>;
        id_lt?: string | null;
        id_lte?: string | null;
        id_gt?: string | null;
        id_gte?: string | null;
        id_contains?: string | null;
        id_not_contains?: string | null;
        id_starts_with?: string | null;
        id_not_starts_with?: string | null;
        id_ends_with?: string | null;
        id_not_ends_with?: string | null;
        createdAt?: any | null;
        createdAt_not?: any | null;
        createdAt_in: Array<any>;
        createdAt_not_in: Array<any>;
        createdAt_lt?: any | null;
        createdAt_lte?: any | null;
        createdAt_gt?: any | null;
        createdAt_gte?: any | null;
        title?: string | null;
        title_not?: string | null;
        title_in: Array<string>;
        title_not_in: Array<string>;
        title_lt?: string | null;
        title_lte?: string | null;
        title_gt?: string | null;
        title_gte?: string | null;
        title_contains?: string | null;
        title_not_contains?: string | null;
        title_starts_with?: string | null;
        title_not_starts_with?: string | null;
        title_ends_with?: string | null;
        title_not_ends_with?: string | null;
        contracts_every?: IContractWhereInput | null;
        contracts_some?: IContractWhereInput | null;
        contracts_none?: IContractWhereInput | null;
    }

    interface IContractWhereInput {
        AND: Array<IContractWhereInput>;
        OR: Array<IContractWhereInput>;
        NOT: Array<IContractWhereInput>;
        id?: string | null;
        id_not?: string | null;
        id_in: Array<string>;
        id_not_in: Array<string>;
        id_lt?: string | null;
        id_lte?: string | null;
        id_gt?: string | null;
        id_gte?: string | null;
        id_contains?: string | null;
        id_not_contains?: string | null;
        id_starts_with?: string | null;
        id_not_starts_with?: string | null;
        id_ends_with?: string | null;
        id_not_ends_with?: string | null;
        createdAt?: any | null;
        createdAt_not?: any | null;
        createdAt_in: Array<any>;
        createdAt_not_in: Array<any>;
        createdAt_lt?: any | null;
        createdAt_lte?: any | null;
        createdAt_gt?: any | null;
        createdAt_gte?: any | null;
        title?: string | null;
        title_not?: string | null;
        title_in: Array<string>;
        title_not_in: Array<string>;
        title_lt?: string | null;
        title_lte?: string | null;
        title_gt?: string | null;
        title_gte?: string | null;
        title_contains?: string | null;
        title_not_contains?: string | null;
        title_starts_with?: string | null;
        title_not_starts_with?: string | null;
        title_ends_with?: string | null;
        title_not_ends_with?: string | null;
        errorCount?: number | null;
        errorCount_not?: number | null;
        errorCount_in: Array<number>;
        errorCount_not_in: Array<number>;
        errorCount_lt?: number | null;
        errorCount_lte?: number | null;
        errorCount_gt?: number | null;
        errorCount_gte?: number | null;
        wordCount?: number | null;
        wordCount_not?: number | null;
        wordCount_in: Array<number>;
        wordCount_not_in: Array<number>;
        wordCount_lt?: number | null;
        wordCount_lte?: number | null;
        wordCount_gt?: number | null;
        wordCount_gte?: number | null;
        checked?: boolean | null;
        checked_not?: boolean | null;
        submitter?: ISubmitterWhereInput | null;
        winners_every?: IWinnerWhereInput | null;
        winners_some?: IWinnerWhereInput | null;
        winners_none?: IWinnerWhereInput | null;
    }

    interface IWinnerWhereInput {
        AND: Array<IWinnerWhereInput>;
        OR: Array<IWinnerWhereInput>;
        NOT: Array<IWinnerWhereInput>;
        id?: string | null;
        id_not?: string | null;
        id_in: Array<string>;
        id_not_in: Array<string>;
        id_lt?: string | null;
        id_lte?: string | null;
        id_gt?: string | null;
        id_gte?: string | null;
        id_contains?: string | null;
        id_not_contains?: string | null;
        id_starts_with?: string | null;
        id_not_starts_with?: string | null;
        id_ends_with?: string | null;
        id_not_ends_with?: string | null;
        createdAt?: any | null;
        createdAt_not?: any | null;
        createdAt_in: Array<any>;
        createdAt_not_in: Array<any>;
        createdAt_lt?: any | null;
        createdAt_lte?: any | null;
        createdAt_gt?: any | null;
        createdAt_gte?: any | null;
        title?: string | null;
        title_not?: string | null;
        title_in: Array<string>;
        title_not_in: Array<string>;
        title_lt?: string | null;
        title_lte?: string | null;
        title_gt?: string | null;
        title_gte?: string | null;
        title_contains?: string | null;
        title_not_contains?: string | null;
        title_starts_with?: string | null;
        title_not_starts_with?: string | null;
        title_ends_with?: string | null;
        title_not_ends_with?: string | null;
        contracts_every?: IContractWhereInput | null;
        contracts_some?: IContractWhereInput | null;
        contracts_none?: IContractWhereInput | null;
    }

    interface ISubmitter {
        __typename: 'Submitter';
        id: string;
        createdAt: any;
        title: string;
        contracts: Array<IContract>;
    }

    interface IContractsOnSubmitterArguments {
        where?: IContractWhereInput | null;
        orderBy?: ContractOrderByInput | null;
        skip?: number | null;
        after?: string | null;
        before?: string | null;
        first?: number | null;
        last?: number | null;
    }

    const enum ContractOrderByInput {
        id_ASC = 'id_ASC',
        id_DESC = 'id_DESC',
        createdAt_ASC = 'createdAt_ASC',
        createdAt_DESC = 'createdAt_DESC',
        title_ASC = 'title_ASC',
        title_DESC = 'title_DESC',
        errorCount_ASC = 'errorCount_ASC',
        errorCount_DESC = 'errorCount_DESC',
        wordCount_ASC = 'wordCount_ASC',
        wordCount_DESC = 'wordCount_DESC',
        checked_ASC = 'checked_ASC',
        checked_DESC = 'checked_DESC',
        updatedAt_ASC = 'updatedAt_ASC',
        updatedAt_DESC = 'updatedAt_DESC'
    }

    const enum WinnerOrderByInput {
        id_ASC = 'id_ASC',
        id_DESC = 'id_DESC',
        createdAt_ASC = 'createdAt_ASC',
        createdAt_DESC = 'createdAt_DESC',
        title_ASC = 'title_ASC',
        title_DESC = 'title_DESC',
        updatedAt_ASC = 'updatedAt_ASC',
        updatedAt_DESC = 'updatedAt_DESC'
    }

    interface IWinner {
        __typename: 'Winner';
        id: string;
        createdAt: any;
        title: string;
        contracts: Array<IContract>;
    }

    interface IContractsOnWinnerArguments {
        where?: IContractWhereInput | null;
        orderBy?: ContractOrderByInput | null;
        skip?: number | null;
        after?: string | null;
        before?: string | null;
        first?: number | null;
        last?: number | null;
    }

    interface IMutation {
        __typename: 'Mutation';
        createContract: IContract;
        createSubmitter: ISubmitter;
        updateStates: IBatchPayload;
    }

    interface ICreateContractOnMutationArguments {
        data: IContractCreateInput;
    }

    interface ICreateSubmitterOnMutationArguments {
        data: ISubmitterCreateInput;
    }

    interface IUpdateStatesOnMutationArguments {
        contractIds: Array<string>;
        newValue?: boolean | null;
    }

    interface IContractCreateInput {
        title: string;
        errorCount?: number | null;
        wordCount: number;
        checked?: boolean | null;
        submitter: ISubmitterCreateOneWithoutContractsInput;
        winners?: IWinnerCreateManyWithoutContractsInput | null;
    }

    interface ISubmitterCreateOneWithoutContractsInput {
        create?: ISubmitterCreateWithoutContractsInput | null;
        connect?: ISubmitterWhereUniqueInput | null;
    }

    interface ISubmitterCreateWithoutContractsInput {
        title: string;
    }

    interface ISubmitterWhereUniqueInput {
        id?: string | null;
        title?: string | null;
    }

    interface IWinnerCreateManyWithoutContractsInput {
        create: Array<IWinnerCreateWithoutContractsInput>;
        connect: Array<IWinnerWhereUniqueInput>;
    }

    interface IWinnerCreateWithoutContractsInput {
        title: string;
    }

    interface IWinnerWhereUniqueInput {
        id?: string | null;
        title?: string | null;
    }

    interface ISubmitterCreateInput {
        title: string;
        contracts?: IContractCreateManyWithoutSubmitterInput | null;
    }

    interface IContractCreateManyWithoutSubmitterInput {
        create: Array<IContractCreateWithoutSubmitterInput>;
        connect: Array<IContractWhereUniqueInput>;
    }

    interface IContractCreateWithoutSubmitterInput {
        title: string;
        errorCount?: number | null;
        wordCount: number;
        checked?: boolean | null;
        winners?: IWinnerCreateManyWithoutContractsInput | null;
    }

    interface IContractWhereUniqueInput {
        id?: string | null;
        title?: string | null;
    }

    interface IBatchPayload {
        __typename: 'BatchPayload';
        count: any;
    }

    interface ISubmitterUpdateOneWithoutContractsInput {
        create?: ISubmitterCreateWithoutContractsInput | null;
        connect?: ISubmitterWhereUniqueInput | null;
        delete?: boolean | null;
        update?: ISubmitterUpdateWithoutContractsDataInput | null;
        upsert?: ISubmitterUpsertWithoutContractsInput | null;
    }

    interface ISubmitterUpdateWithoutContractsDataInput {
        title?: string | null;
    }

    interface ISubmitterUpsertWithoutContractsInput {
        update: ISubmitterUpdateWithoutContractsDataInput;
        create: ISubmitterCreateWithoutContractsInput;
    }

    interface IWinnerUpdateManyWithoutContractsInput {
        create: Array<IWinnerCreateWithoutContractsInput>;
        connect: Array<IWinnerWhereUniqueInput>;
        disconnect: Array<IWinnerWhereUniqueInput>;
        delete: Array<IWinnerWhereUniqueInput>;
        update: Array<IWinnerUpdateWithWhereUniqueWithoutContractsInput>;
        upsert: Array<IWinnerUpsertWithWhereUniqueWithoutContractsInput>;
    }

    interface IWinnerUpdateWithWhereUniqueWithoutContractsInput {
        where: IWinnerWhereUniqueInput;
        data: IWinnerUpdateWithoutContractsDataInput;
    }

    interface IWinnerUpdateWithoutContractsDataInput {
        title?: string | null;
    }

    interface IWinnerUpsertWithWhereUniqueWithoutContractsInput {
        where: IWinnerWhereUniqueInput;
        update: IWinnerUpdateWithoutContractsDataInput;
        create: IWinnerCreateWithoutContractsInput;
    }
}

// tslint:enable
