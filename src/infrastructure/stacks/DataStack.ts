import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { ITable, Table, AttributeType } from 'aws-cdk-lib/aws-dynamodb'
import { getSuffixFromStack } from '../Utils'

export class DataStack extends Stack {

    public readonly retroTable: ITable

    constructor( scope: Construct, id: string, props?: StackProps){
        super(scope, id, props)

        const suffix = getSuffixFromStack(this)

        this.retroTable = new Table(this, 'RetroGamesTable',{
            partitionKey: {
                name: 'id',
                type: AttributeType.STRING
            },
            tableName: `RetroGameStack-${suffix}`
        })
    }
}