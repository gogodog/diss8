package com.pw.diss8.common.utils;

import com.pw.diss8.common.exception.code.BaseResponseCode;
import com.pw.diss8.common.exception.code.ResponseCodeInterface;
import lombok.Data;

/**
 * 返回值DataResult
 *
 * @author Prescott.Wen
 * @version V1.0
 * @date 2021年7月18日
 */
@Data
public class DataResult {

    /**
     * 请求响应code，0为成功 其他为失败
     */
    private int code;

    /**
     * 响应异常码详细信息
     */
    private String msg;

    private Object data;

    public DataResult(int code, Object data) {
        this.code = code;
        this.data = data;
        this.msg = null;
    }

    public DataResult(int code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public DataResult(int code, String msg) {
        this.code = code;
        this.msg = msg;
        this.data = null;
    }


    public DataResult() {
        this.code = BaseResponseCode.SUCCESS.getCode();
        this.msg = BaseResponseCode.SUCCESS.getMsg();
        this.data = null;
    }

    public DataResult(Object data) {
        this.data = data;
        this.code = BaseResponseCode.SUCCESS.getCode();
        this.msg = BaseResponseCode.SUCCESS.getMsg();
    }

    public DataResult(ResponseCodeInterface responseCodeInterface) {
        this.data = null;
        this.code = responseCodeInterface.getCode();
        this.msg = responseCodeInterface.getMsg();
    }

    public DataResult(ResponseCodeInterface responseCodeInterface, Object data) {
        this.data = data;
        this.code = responseCodeInterface.getCode();
        this.msg = responseCodeInterface.getMsg();
    }

    /**
     * 操作成功 data为null
     */
    public static DataResult success() {
        return new DataResult();
    }

    /**
     * 操作成功 data 不为null
     */
    public static DataResult success(Object data) {
        return new DataResult(data);
    }

    /**
     * 操作失败 data 不为null
     */
    public static DataResult fail(String msg) {
        return new DataResult(BaseResponseCode.OPERATION_ERRO.getCode(), msg);
    }

    /**
     * 自定义返回  data为null
     */
    public static DataResult getResult(int code, String msg) {
        return new DataResult(code, msg);
    }

    /**
     * 自定义返回 入参一般是异常code枚举 data为空
     */
    public static DataResult getResult(BaseResponseCode responseCode) {
        return new DataResult(responseCode);
    }


}
