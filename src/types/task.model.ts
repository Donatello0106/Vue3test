
import { PlatForm, PlatFormValue } from './platform.model'
import { CurrencyValue } from './money.model'
import { FilesId } from './filesid.model'

export interface TaskResponse {
    tasks: tasksInfo
    count: number
}

export interface tasksInfo {
    id: string
    addedTime: string
    title: string
    description: string
    budget: Array<CurrencyValue>
    proposalCount: 0
    platforms: Array<PlatForm>
    proposalAlreadySent: Boolean
    addedByMe: Boolean
    hasContractCreated: Boolean
    hasContractAccepted: Boolean
    files: fileInfo
    marketerInfo: marketerInfoDetail
}

export interface fileInfo {
    id: string
    filename: string
    size: number
    signedUrl: string
}

export interface marketerInfoDetail {
    firstName: string
    lastName: string
    description: string
    avatarSimpleAccessFile: AvatarSimpleAccessFileInfo
    rating: number
    moneyTransferred: number
    location: string
    registerDate: string
}

export interface AvatarSimpleAccessFileInfo {
    id: string
    filename: string
    size: number
    signedUrl: string
}

export interface AddTask {
    title: string
    description: string
}

export interface GetTasks {
    limit: number
    olderThanId: string
    newerThanId: string
    skip: number
}