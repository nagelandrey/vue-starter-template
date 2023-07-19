import { ApiPaths } from '@/models/ApiPaths'
import { IUser } from '@/models/entities/IUser'
import { IRequestLogin } from '@/models/requests/IRequestLogin'
import { IResponse } from '@/models/responses/IResponse'
import { IResponseLogin } from '@/models/responses/IResponseLogin'
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export const login = (payload: IRequestLogin): AxiosPromise<IResponseLogin> =>
  request.post(`${ApiPaths.BaseApi}/login`, payload)

export const getUserMe = (): AxiosPromise<IResponse<IUser>> =>
  request.get(`/user`)

export const logout = () => request.get(`/logout`)
