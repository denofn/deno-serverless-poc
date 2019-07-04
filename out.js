var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define("https://deno.land/std/strings/encode", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** A default TextEncoder instance */
    exports.encoder = new TextEncoder();
    /** Shorthand for new TextEncoder().encode() */
    function encode(input) {
        return exports.encoder.encode(input);
    }
    exports.encode = encode;
});
define("https://deno.land/std/strings/decode", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** A default TextDecoder instance */
    exports.decoder = new TextDecoder();
    /** Shorthand for new TextDecoder().decode() */
    function decode(input) {
        return exports.decoder.decode(input);
    }
    exports.decode = decode;
});
// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
define("https://deno.land/std/strings/pad", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Pad helper for strings.
     * Input string is processed to output a string with a minimal length.
     * If the parameter `strict` is set to true, the output string length
     * is equal to the `strLen` parameter.
     * Example:
     *
     *     pad("deno", 6, { char: "*", side: "left" }) // output : "**deno"
     *     pad("deno", 6, { char: "*", side: "right"}) // output : "deno**"
     *     pad("denosorusrex", 6 {
     *       char: "*",
     *       side: "left",
     *       strict: true,
     *       strictSide: "right",
     *       strictChar: "..."
     *     }) // output : "den..."
     *
     * @param input Input string
     * @param strLen Output string lenght
     * @param opts Configuration object
     * @param [opts.char=" "] Character used to fill in
     * @param [opts.side="left"] Side to fill in
     * @param [opts.strict=false] Flag to truncate the string if length > strLen
     * @param [opts.strictChar=""] Character to add if string is truncated
     * @param [opts.strictSide="right"] Side to truncate
     */
    function pad(input, strLen, opts = {
        char: " ",
        strict: false,
        side: "left",
        strictChar: "",
        strictSide: "right"
    }) {
        let out = input;
        const outL = out.length;
        if (outL < strLen) {
            if (!opts.side || opts.side === "left") {
                out = out.padStart(strLen, opts.char);
            }
            else {
                out = out.padEnd(strLen, opts.char);
            }
        }
        else if (opts.strict && outL > strLen) {
            let addChar = opts.strictChar ? opts.strictChar : "";
            if (opts.strictSide === "left") {
                let toDrop = outL - strLen;
                if (opts.strictChar) {
                    toDrop += opts.strictChar.length;
                }
                out = `${addChar}${out.slice(toDrop, outL)}`;
            }
            else {
                out = `${out.substring(0, strLen - addChar.length)}${addChar}`;
            }
        }
        return out;
    }
    exports.pad = pad;
});
// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
define("https://deno.land/std/strings/mod", ["require", "exports", "https://deno.land/std/strings/encode", "https://deno.land/std/strings/decode", "https://deno.land/std/strings/pad"], function (require, exports, encode_ts_1, decode_ts_1, pad_ts_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(encode_ts_1);
    __export(decode_ts_1);
    __export(pad_ts_1);
});
define("https://deno.land/std/fs/path/interface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
// Copyright the Browserify authors. MIT License.
// Ported from https://github.com/browserify/path-browserify/
define("https://deno.land/std/fs/path/constants", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const { build } = Deno;
    // Alphabet chars.
    exports.CHAR_UPPERCASE_A = 65; /* A */
    exports.CHAR_LOWERCASE_A = 97; /* a */
    exports.CHAR_UPPERCASE_Z = 90; /* Z */
    exports.CHAR_LOWERCASE_Z = 122; /* z */
    // Non-alphabetic chars.
    exports.CHAR_DOT = 46; /* . */
    exports.CHAR_FORWARD_SLASH = 47; /* / */
    exports.CHAR_BACKWARD_SLASH = 92; /* \ */
    exports.CHAR_VERTICAL_LINE = 124; /* | */
    exports.CHAR_COLON = 58; /* : */
    exports.CHAR_QUESTION_MARK = 63; /* ? */
    exports.CHAR_UNDERSCORE = 95; /* _ */
    exports.CHAR_LINE_FEED = 10; /* \n */
    exports.CHAR_CARRIAGE_RETURN = 13; /* \r */
    exports.CHAR_TAB = 9; /* \t */
    exports.CHAR_FORM_FEED = 12; /* \f */
    exports.CHAR_EXCLAMATION_MARK = 33; /* ! */
    exports.CHAR_HASH = 35; /* # */
    exports.CHAR_SPACE = 32; /*   */
    exports.CHAR_NO_BREAK_SPACE = 160; /* \u00A0 */
    exports.CHAR_ZERO_WIDTH_NOBREAK_SPACE = 65279; /* \uFEFF */
    exports.CHAR_LEFT_SQUARE_BRACKET = 91; /* [ */
    exports.CHAR_RIGHT_SQUARE_BRACKET = 93; /* ] */
    exports.CHAR_LEFT_ANGLE_BRACKET = 60; /* < */
    exports.CHAR_RIGHT_ANGLE_BRACKET = 62; /* > */
    exports.CHAR_LEFT_CURLY_BRACKET = 123; /* { */
    exports.CHAR_RIGHT_CURLY_BRACKET = 125; /* } */
    exports.CHAR_HYPHEN_MINUS = 45; /* - */
    exports.CHAR_PLUS = 43; /* + */
    exports.CHAR_DOUBLE_QUOTE = 34; /* " */
    exports.CHAR_SINGLE_QUOTE = 39; /* ' */
    exports.CHAR_PERCENT = 37; /* % */
    exports.CHAR_SEMICOLON = 59; /* ; */
    exports.CHAR_CIRCUMFLEX_ACCENT = 94; /* ^ */
    exports.CHAR_GRAVE_ACCENT = 96; /* ` */
    exports.CHAR_AT = 64; /* @ */
    exports.CHAR_AMPERSAND = 38; /* & */
    exports.CHAR_EQUAL = 61; /* = */
    // Digits
    exports.CHAR_0 = 48; /* 0 */
    exports.CHAR_9 = 57; /* 9 */
    exports.isWindows = build.os === "win";
    exports.EOL = exports.isWindows ? "\r\n" : "\n";
});
// Copyright the Browserify authors. MIT License.
// Ported from https://github.com/browserify/path-browserify/
define("https://deno.land/std/fs/path/utils", ["require", "exports", "https://deno.land/std/fs/path/constants"], function (require, exports, constants_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function assertPath(path) {
        if (typeof path !== "string") {
            throw new TypeError(`Path must be a string. Received ${JSON.stringify(path)}`);
        }
    }
    exports.assertPath = assertPath;
    function isPosixPathSeparator(code) {
        return code === constants_ts_1.CHAR_FORWARD_SLASH;
    }
    exports.isPosixPathSeparator = isPosixPathSeparator;
    function isPathSeparator(code) {
        return isPosixPathSeparator(code) || code === constants_ts_1.CHAR_BACKWARD_SLASH;
    }
    exports.isPathSeparator = isPathSeparator;
    function isWindowsDeviceRoot(code) {
        return ((code >= constants_ts_1.CHAR_LOWERCASE_A && code <= constants_ts_1.CHAR_LOWERCASE_Z) ||
            (code >= constants_ts_1.CHAR_UPPERCASE_A && code <= constants_ts_1.CHAR_UPPERCASE_Z));
    }
    exports.isWindowsDeviceRoot = isWindowsDeviceRoot;
    // Resolves . and .. elements in a path with directory names
    function normalizeString(path, allowAboveRoot, separator, isPathSeparator) {
        let res = "";
        let lastSegmentLength = 0;
        let lastSlash = -1;
        let dots = 0;
        let code;
        for (let i = 0, len = path.length; i <= len; ++i) {
            if (i < len)
                code = path.charCodeAt(i);
            else if (isPathSeparator(code))
                break;
            else
                code = constants_ts_1.CHAR_FORWARD_SLASH;
            if (isPathSeparator(code)) {
                if (lastSlash === i - 1 || dots === 1) {
                    // NOOP
                }
                else if (lastSlash !== i - 1 && dots === 2) {
                    if (res.length < 2 ||
                        lastSegmentLength !== 2 ||
                        res.charCodeAt(res.length - 1) !== constants_ts_1.CHAR_DOT ||
                        res.charCodeAt(res.length - 2) !== constants_ts_1.CHAR_DOT) {
                        if (res.length > 2) {
                            const lastSlashIndex = res.lastIndexOf(separator);
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            }
                            else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                        else if (res.length === 2 || res.length === 1) {
                            res = "";
                            lastSegmentLength = 0;
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    }
                    if (allowAboveRoot) {
                        if (res.length > 0)
                            res += `${separator}..`;
                        else
                            res = "..";
                        lastSegmentLength = 2;
                    }
                }
                else {
                    if (res.length > 0)
                        res += separator + path.slice(lastSlash + 1, i);
                    else
                        res = path.slice(lastSlash + 1, i);
                    lastSegmentLength = i - lastSlash - 1;
                }
                lastSlash = i;
                dots = 0;
            }
            else if (code === constants_ts_1.CHAR_DOT && dots !== -1) {
                ++dots;
            }
            else {
                dots = -1;
            }
        }
        return res;
    }
    exports.normalizeString = normalizeString;
    function _format(sep, pathObject) {
        const dir = pathObject.dir || pathObject.root;
        const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
        if (!dir)
            return base;
        if (dir === pathObject.root)
            return dir + base;
        return dir + sep + base;
    }
    exports._format = _format;
});
// Copyright the Browserify authors. MIT License.
// Ported from https://github.com/browserify/path-browserify/
define("https://deno.land/std/fs/path/win32", ["require", "exports", "https://deno.land/std/fs/path/constants", "https://deno.land/std/fs/path/utils"], function (require, exports, constants_ts_2, utils_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const { cwd, env } = Deno;
    exports.sep = "\\";
    exports.delimiter = ";";
    function resolve(...pathSegments) {
        let resolvedDevice = "";
        let resolvedTail = "";
        let resolvedAbsolute = false;
        for (let i = pathSegments.length - 1; i >= -1; i--) {
            let path;
            if (i >= 0) {
                path = pathSegments[i];
            }
            else if (!resolvedDevice) {
                path = cwd();
            }
            else {
                // Windows has the concept of drive-specific current working
                // directories. If we've resolved a drive letter but not yet an
                // absolute path, get cwd for that drive, or the process cwd if
                // the drive cwd is not available. We're sure the device is not
                // a UNC path at this points, because UNC paths are always absolute.
                path = env()[`=${resolvedDevice}`] || cwd();
                // Verify that a cwd was found and that it actually points
                // to our drive. If not, default to the drive's root.
                if (path === undefined ||
                    path.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
                    path = `${resolvedDevice}\\`;
                }
            }
            utils_ts_1.assertPath(path);
            const len = path.length;
            // Skip empty entries
            if (len === 0)
                continue;
            let rootEnd = 0;
            let device = "";
            let isAbsolute = false;
            const code = path.charCodeAt(0);
            // Try to match a root
            if (len > 1) {
                if (utils_ts_1.isPathSeparator(code)) {
                    // Possible UNC root
                    // If we started with a separator, we know we at least have an
                    // absolute path of some kind (UNC or otherwise)
                    isAbsolute = true;
                    if (utils_ts_1.isPathSeparator(path.charCodeAt(1))) {
                        // Matched double path separator at beginning
                        let j = 2;
                        let last = j;
                        // Match 1 or more non-path separators
                        for (; j < len; ++j) {
                            if (utils_ts_1.isPathSeparator(path.charCodeAt(j)))
                                break;
                        }
                        if (j < len && j !== last) {
                            const firstPart = path.slice(last, j);
                            // Matched!
                            last = j;
                            // Match 1 or more path separators
                            for (; j < len; ++j) {
                                if (!utils_ts_1.isPathSeparator(path.charCodeAt(j)))
                                    break;
                            }
                            if (j < len && j !== last) {
                                // Matched!
                                last = j;
                                // Match 1 or more non-path separators
                                for (; j < len; ++j) {
                                    if (utils_ts_1.isPathSeparator(path.charCodeAt(j)))
                                        break;
                                }
                                if (j === len) {
                                    // We matched a UNC root only
                                    device = `\\\\${firstPart}\\${path.slice(last)}`;
                                    rootEnd = j;
                                }
                                else if (j !== last) {
                                    // We matched a UNC root with leftovers
                                    device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                                    rootEnd = j;
                                }
                            }
                        }
                    }
                    else {
                        rootEnd = 1;
                    }
                }
                else if (utils_ts_1.isWindowsDeviceRoot(code)) {
                    // Possible device root
                    if (path.charCodeAt(1) === constants_ts_2.CHAR_COLON) {
                        device = path.slice(0, 2);
                        rootEnd = 2;
                        if (len > 2) {
                            if (utils_ts_1.isPathSeparator(path.charCodeAt(2))) {
                                // Treat separator following drive name as an absolute path
                                // indicator
                                isAbsolute = true;
                                rootEnd = 3;
                            }
                        }
                    }
                }
            }
            else if (utils_ts_1.isPathSeparator(code)) {
                // `path` contains just a path separator
                rootEnd = 1;
                isAbsolute = true;
            }
            if (device.length > 0 &&
                resolvedDevice.length > 0 &&
                device.toLowerCase() !== resolvedDevice.toLowerCase()) {
                // This path points to another device so it is not applicable
                continue;
            }
            if (resolvedDevice.length === 0 && device.length > 0) {
                resolvedDevice = device;
            }
            if (!resolvedAbsolute) {
                resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`;
                resolvedAbsolute = isAbsolute;
            }
            if (resolvedAbsolute && resolvedDevice.length > 0)
                break;
        }
        // At this point the path should be resolved to a full absolute path,
        // but handle relative paths to be safe (might happen when process.cwd()
        // fails)
        // Normalize the tail path
        resolvedTail = utils_ts_1.normalizeString(resolvedTail, !resolvedAbsolute, "\\", utils_ts_1.isPathSeparator);
        return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
    }
    exports.resolve = resolve;
    function normalize(path) {
        utils_ts_1.assertPath(path);
        const len = path.length;
        if (len === 0)
            return ".";
        let rootEnd = 0;
        let device;
        let isAbsolute = false;
        const code = path.charCodeAt(0);
        // Try to match a root
        if (len > 1) {
            if (utils_ts_1.isPathSeparator(code)) {
                // Possible UNC root
                // If we started with a separator, we know we at least have an absolute
                // path of some kind (UNC or otherwise)
                isAbsolute = true;
                if (utils_ts_1.isPathSeparator(path.charCodeAt(1))) {
                    // Matched double path separator at beginning
                    let j = 2;
                    let last = j;
                    // Match 1 or more non-path separators
                    for (; j < len; ++j) {
                        if (utils_ts_1.isPathSeparator(path.charCodeAt(j)))
                            break;
                    }
                    if (j < len && j !== last) {
                        const firstPart = path.slice(last, j);
                        // Matched!
                        last = j;
                        // Match 1 or more path separators
                        for (; j < len; ++j) {
                            if (!utils_ts_1.isPathSeparator(path.charCodeAt(j)))
                                break;
                        }
                        if (j < len && j !== last) {
                            // Matched!
                            last = j;
                            // Match 1 or more non-path separators
                            for (; j < len; ++j) {
                                if (utils_ts_1.isPathSeparator(path.charCodeAt(j)))
                                    break;
                            }
                            if (j === len) {
                                // We matched a UNC root only
                                // Return the normalized version of the UNC root since there
                                // is nothing left to process
                                return `\\\\${firstPart}\\${path.slice(last)}\\`;
                            }
                            else if (j !== last) {
                                // We matched a UNC root with leftovers
                                device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                                rootEnd = j;
                            }
                        }
                    }
                }
                else {
                    rootEnd = 1;
                }
            }
            else if (utils_ts_1.isWindowsDeviceRoot(code)) {
                // Possible device root
                if (path.charCodeAt(1) === constants_ts_2.CHAR_COLON) {
                    device = path.slice(0, 2);
                    rootEnd = 2;
                    if (len > 2) {
                        if (utils_ts_1.isPathSeparator(path.charCodeAt(2))) {
                            // Treat separator following drive name as an absolute path
                            // indicator
                            isAbsolute = true;
                            rootEnd = 3;
                        }
                    }
                }
            }
        }
        else if (utils_ts_1.isPathSeparator(code)) {
            // `path` contains just a path separator, exit early to avoid unnecessary
            // work
            return "\\";
        }
        let tail;
        if (rootEnd < len) {
            tail = utils_ts_1.normalizeString(path.slice(rootEnd), !isAbsolute, "\\", utils_ts_1.isPathSeparator);
        }
        else {
            tail = "";
        }
        if (tail.length === 0 && !isAbsolute)
            tail = ".";
        if (tail.length > 0 && utils_ts_1.isPathSeparator(path.charCodeAt(len - 1)))
            tail += "\\";
        if (device === undefined) {
            if (isAbsolute) {
                if (tail.length > 0)
                    return `\\${tail}`;
                else
                    return "\\";
            }
            else if (tail.length > 0) {
                return tail;
            }
            else {
                return "";
            }
        }
        else if (isAbsolute) {
            if (tail.length > 0)
                return `${device}\\${tail}`;
            else
                return `${device}\\`;
        }
        else if (tail.length > 0) {
            return device + tail;
        }
        else {
            return device;
        }
    }
    exports.normalize = normalize;
    function isAbsolute(path) {
        utils_ts_1.assertPath(path);
        const len = path.length;
        if (len === 0)
            return false;
        const code = path.charCodeAt(0);
        if (utils_ts_1.isPathSeparator(code)) {
            return true;
        }
        else if (utils_ts_1.isWindowsDeviceRoot(code)) {
            // Possible device root
            if (len > 2 && path.charCodeAt(1) === constants_ts_2.CHAR_COLON) {
                if (utils_ts_1.isPathSeparator(path.charCodeAt(2)))
                    return true;
            }
        }
        return false;
    }
    exports.isAbsolute = isAbsolute;
    function join(...paths) {
        const pathsCount = paths.length;
        if (pathsCount === 0)
            return ".";
        let joined;
        let firstPart;
        for (let i = 0; i < pathsCount; ++i) {
            let path = paths[i];
            utils_ts_1.assertPath(path);
            if (path.length > 0) {
                if (joined === undefined)
                    joined = firstPart = path;
                else
                    joined += `\\${path}`;
            }
        }
        if (joined === undefined)
            return ".";
        // Make sure that the joined path doesn't start with two slashes, because
        // normalize() will mistake it for an UNC path then.
        //
        // This step is skipped when it is very clear that the user actually
        // intended to point at an UNC path. This is assumed when the first
        // non-empty string arguments starts with exactly two slashes followed by
        // at least one more non-slash character.
        //
        // Note that for normalize() to treat a path as an UNC path it needs to
        // have at least 2 components, so we don't filter for that here.
        // This means that the user can use join to construct UNC paths from
        // a server name and a share name; for example:
        //   path.join('//server', 'share') -> '\\\\server\\share\\')
        let needsReplace = true;
        let slashCount = 0;
        firstPart = firstPart;
        if (utils_ts_1.isPathSeparator(firstPart.charCodeAt(0))) {
            ++slashCount;
            const firstLen = firstPart.length;
            if (firstLen > 1) {
                if (utils_ts_1.isPathSeparator(firstPart.charCodeAt(1))) {
                    ++slashCount;
                    if (firstLen > 2) {
                        if (utils_ts_1.isPathSeparator(firstPart.charCodeAt(2)))
                            ++slashCount;
                        else {
                            // We matched a UNC path in the first part
                            needsReplace = false;
                        }
                    }
                }
            }
        }
        if (needsReplace) {
            // Find any more consecutive slashes we need to replace
            for (; slashCount < joined.length; ++slashCount) {
                if (!utils_ts_1.isPathSeparator(joined.charCodeAt(slashCount)))
                    break;
            }
            // Replace the slashes if needed
            if (slashCount >= 2)
                joined = `\\${joined.slice(slashCount)}`;
        }
        return normalize(joined);
    }
    exports.join = join;
    // It will solve the relative path from `from` to `to`, for instance:
    //  from = 'C:\\orandea\\test\\aaa'
    //  to = 'C:\\orandea\\impl\\bbb'
    // The output of the function should be: '..\\..\\impl\\bbb'
    function relative(from, to) {
        utils_ts_1.assertPath(from);
        utils_ts_1.assertPath(to);
        if (from === to)
            return "";
        let fromOrig = resolve(from);
        let toOrig = resolve(to);
        if (fromOrig === toOrig)
            return "";
        from = fromOrig.toLowerCase();
        to = toOrig.toLowerCase();
        if (from === to)
            return "";
        // Trim any leading backslashes
        let fromStart = 0;
        let fromEnd = from.length;
        for (; fromStart < fromEnd; ++fromStart) {
            if (from.charCodeAt(fromStart) !== constants_ts_2.CHAR_BACKWARD_SLASH)
                break;
        }
        // Trim trailing backslashes (applicable to UNC paths only)
        for (; fromEnd - 1 > fromStart; --fromEnd) {
            if (from.charCodeAt(fromEnd - 1) !== constants_ts_2.CHAR_BACKWARD_SLASH)
                break;
        }
        let fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        let toStart = 0;
        let toEnd = to.length;
        for (; toStart < toEnd; ++toStart) {
            if (to.charCodeAt(toStart) !== constants_ts_2.CHAR_BACKWARD_SLASH)
                break;
        }
        // Trim trailing backslashes (applicable to UNC paths only)
        for (; toEnd - 1 > toStart; --toEnd) {
            if (to.charCodeAt(toEnd - 1) !== constants_ts_2.CHAR_BACKWARD_SLASH)
                break;
        }
        let toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        let length = fromLen < toLen ? fromLen : toLen;
        let lastCommonSep = -1;
        let i = 0;
        for (; i <= length; ++i) {
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === constants_ts_2.CHAR_BACKWARD_SLASH) {
                        // We get here if `from` is the exact base path for `to`.
                        // For example: from='C:\\foo\\bar'; to='C:\\foo\\bar\\baz'
                        return toOrig.slice(toStart + i + 1);
                    }
                    else if (i === 2) {
                        // We get here if `from` is the device root.
                        // For example: from='C:\\'; to='C:\\foo'
                        return toOrig.slice(toStart + i);
                    }
                }
                if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === constants_ts_2.CHAR_BACKWARD_SLASH) {
                        // We get here if `to` is the exact base path for `from`.
                        // For example: from='C:\\foo\\bar'; to='C:\\foo'
                        lastCommonSep = i;
                    }
                    else if (i === 2) {
                        // We get here if `to` is the device root.
                        // For example: from='C:\\foo\\bar'; to='C:\\'
                        lastCommonSep = 3;
                    }
                }
                break;
            }
            let fromCode = from.charCodeAt(fromStart + i);
            let toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode)
                break;
            else if (fromCode === constants_ts_2.CHAR_BACKWARD_SLASH)
                lastCommonSep = i;
        }
        // We found a mismatch before the first common path separator was seen, so
        // return the original `to`.
        if (i !== length && lastCommonSep === -1) {
            return toOrig;
        }
        let out = "";
        if (lastCommonSep === -1)
            lastCommonSep = 0;
        // Generate the relative path based on the path difference between `to` and
        // `from`
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
            if (i === fromEnd || from.charCodeAt(i) === constants_ts_2.CHAR_BACKWARD_SLASH) {
                if (out.length === 0)
                    out += "..";
                else
                    out += "\\..";
            }
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0)
            return out + toOrig.slice(toStart + lastCommonSep, toEnd);
        else {
            toStart += lastCommonSep;
            if (toOrig.charCodeAt(toStart) === constants_ts_2.CHAR_BACKWARD_SLASH)
                ++toStart;
            return toOrig.slice(toStart, toEnd);
        }
    }
    exports.relative = relative;
    function toNamespacedPath(path) {
        // Note: this will *probably* throw somewhere.
        if (typeof path !== "string")
            return path;
        if (path.length === 0)
            return "";
        const resolvedPath = resolve(path);
        if (resolvedPath.length >= 3) {
            if (resolvedPath.charCodeAt(0) === constants_ts_2.CHAR_BACKWARD_SLASH) {
                // Possible UNC root
                if (resolvedPath.charCodeAt(1) === constants_ts_2.CHAR_BACKWARD_SLASH) {
                    const code = resolvedPath.charCodeAt(2);
                    if (code !== constants_ts_2.CHAR_QUESTION_MARK && code !== constants_ts_2.CHAR_DOT) {
                        // Matched non-long UNC root, convert the path to a long UNC path
                        return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
                    }
                }
            }
            else if (utils_ts_1.isWindowsDeviceRoot(resolvedPath.charCodeAt(0))) {
                // Possible device root
                if (resolvedPath.charCodeAt(1) === constants_ts_2.CHAR_COLON &&
                    resolvedPath.charCodeAt(2) === constants_ts_2.CHAR_BACKWARD_SLASH) {
                    // Matched device root, convert the path to a long UNC path
                    return `\\\\?\\${resolvedPath}`;
                }
            }
        }
        return path;
    }
    exports.toNamespacedPath = toNamespacedPath;
    function dirname(path) {
        utils_ts_1.assertPath(path);
        const len = path.length;
        if (len === 0)
            return ".";
        let rootEnd = -1;
        let end = -1;
        let matchedSlash = true;
        let offset = 0;
        const code = path.charCodeAt(0);
        // Try to match a root
        if (len > 1) {
            if (utils_ts_1.isPathSeparator(code)) {
                // Possible UNC root
                rootEnd = offset = 1;
                if (utils_ts_1.isPathSeparator(path.charCodeAt(1))) {
                    // Matched double path separator at beginning
                    let j = 2;
                    let last = j;
                    // Match 1 or more non-path separators
                    for (; j < len; ++j) {
                        if (utils_ts_1.isPathSeparator(path.charCodeAt(j)))
                            break;
                    }
                    if (j < len && j !== last) {
                        // Matched!
                        last = j;
                        // Match 1 or more path separators
                        for (; j < len; ++j) {
                            if (!utils_ts_1.isPathSeparator(path.charCodeAt(j)))
                                break;
                        }
                        if (j < len && j !== last) {
                            // Matched!
                            last = j;
                            // Match 1 or more non-path separators
                            for (; j < len; ++j) {
                                if (utils_ts_1.isPathSeparator(path.charCodeAt(j)))
                                    break;
                            }
                            if (j === len) {
                                // We matched a UNC root only
                                return path;
                            }
                            if (j !== last) {
                                // We matched a UNC root with leftovers
                                // Offset by 1 to include the separator after the UNC root to
                                // treat it as a "normal root" on top of a (UNC) root
                                rootEnd = offset = j + 1;
                            }
                        }
                    }
                }
            }
            else if (utils_ts_1.isWindowsDeviceRoot(code)) {
                // Possible device root
                if (path.charCodeAt(1) === constants_ts_2.CHAR_COLON) {
                    rootEnd = offset = 2;
                    if (len > 2) {
                        if (utils_ts_1.isPathSeparator(path.charCodeAt(2)))
                            rootEnd = offset = 3;
                    }
                }
            }
        }
        else if (utils_ts_1.isPathSeparator(code)) {
            // `path` contains just a path separator, exit early to avoid
            // unnecessary work
            return path;
        }
        for (let i = len - 1; i >= offset; --i) {
            if (utils_ts_1.isPathSeparator(path.charCodeAt(i))) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            }
            else {
                // We saw the first non-path separator
                matchedSlash = false;
            }
        }
        if (end === -1) {
            if (rootEnd === -1)
                return ".";
            else
                end = rootEnd;
        }
        return path.slice(0, end);
    }
    exports.dirname = dirname;
    function basename(path, ext = "") {
        if (ext !== undefined && typeof ext !== "string")
            throw new TypeError('"ext" argument must be a string');
        utils_ts_1.assertPath(path);
        let start = 0;
        let end = -1;
        let matchedSlash = true;
        let i;
        // Check for a drive letter prefix so as not to mistake the following
        // path separator as an extra separator at the end of the path that can be
        // disregarded
        if (path.length >= 2) {
            const drive = path.charCodeAt(0);
            if (utils_ts_1.isWindowsDeviceRoot(drive)) {
                if (path.charCodeAt(1) === constants_ts_2.CHAR_COLON)
                    start = 2;
            }
        }
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path)
                return "";
            let extIdx = ext.length - 1;
            let firstNonSlashEnd = -1;
            for (i = path.length - 1; i >= start; --i) {
                const code = path.charCodeAt(i);
                if (utils_ts_1.isPathSeparator(code)) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                }
                else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) {
                                // We matched the extension, so mark this as the end of our path
                                // component
                                end = i;
                            }
                        }
                        else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end)
                end = firstNonSlashEnd;
            else if (end === -1)
                end = path.length;
            return path.slice(start, end);
        }
        else {
            for (i = path.length - 1; i >= start; --i) {
                if (utils_ts_1.isPathSeparator(path.charCodeAt(i))) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                }
                else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1)
                return "";
            return path.slice(start, end);
        }
    }
    exports.basename = basename;
    function extname(path) {
        utils_ts_1.assertPath(path);
        let start = 0;
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        let preDotState = 0;
        // Check for a drive letter prefix so as not to mistake the following
        // path separator as an extra separator at the end of the path that can be
        // disregarded
        if (path.length >= 2 &&
            path.charCodeAt(1) === constants_ts_2.CHAR_COLON &&
            utils_ts_1.isWindowsDeviceRoot(path.charCodeAt(0))) {
            start = startPart = 2;
        }
        for (let i = path.length - 1; i >= start; --i) {
            const code = path.charCodeAt(i);
            if (utils_ts_1.isPathSeparator(code)) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === constants_ts_2.CHAR_DOT) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1)
                    startDot = i;
                else if (preDotState !== 1)
                    preDotState = 1;
            }
            else if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (startDot === -1 ||
            end === -1 ||
            // We saw a non-dot character immediately before the dot
            preDotState === 0 ||
            // The (right-most) trimmed path component is exactly '..'
            (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)) {
            return "";
        }
        return path.slice(startDot, end);
    }
    exports.extname = extname;
    function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") {
            throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`);
        }
        return utils_ts_1._format("\\", pathObject);
    }
    exports.format = format;
    function parse(path) {
        utils_ts_1.assertPath(path);
        let ret = { root: "", dir: "", base: "", ext: "", name: "" };
        const len = path.length;
        if (len === 0)
            return ret;
        let rootEnd = 0;
        let code = path.charCodeAt(0);
        // Try to match a root
        if (len > 1) {
            if (utils_ts_1.isPathSeparator(code)) {
                // Possible UNC root
                rootEnd = 1;
                if (utils_ts_1.isPathSeparator(path.charCodeAt(1))) {
                    // Matched double path separator at beginning
                    let j = 2;
                    let last = j;
                    // Match 1 or more non-path separators
                    for (; j < len; ++j) {
                        if (utils_ts_1.isPathSeparator(path.charCodeAt(j)))
                            break;
                    }
                    if (j < len && j !== last) {
                        // Matched!
                        last = j;
                        // Match 1 or more path separators
                        for (; j < len; ++j) {
                            if (!utils_ts_1.isPathSeparator(path.charCodeAt(j)))
                                break;
                        }
                        if (j < len && j !== last) {
                            // Matched!
                            last = j;
                            // Match 1 or more non-path separators
                            for (; j < len; ++j) {
                                if (utils_ts_1.isPathSeparator(path.charCodeAt(j)))
                                    break;
                            }
                            if (j === len) {
                                // We matched a UNC root only
                                rootEnd = j;
                            }
                            else if (j !== last) {
                                // We matched a UNC root with leftovers
                                rootEnd = j + 1;
                            }
                        }
                    }
                }
            }
            else if (utils_ts_1.isWindowsDeviceRoot(code)) {
                // Possible device root
                if (path.charCodeAt(1) === constants_ts_2.CHAR_COLON) {
                    rootEnd = 2;
                    if (len > 2) {
                        if (utils_ts_1.isPathSeparator(path.charCodeAt(2))) {
                            if (len === 3) {
                                // `path` contains just a drive root, exit early to avoid
                                // unnecessary work
                                ret.root = ret.dir = path;
                                return ret;
                            }
                            rootEnd = 3;
                        }
                    }
                    else {
                        // `path` contains just a drive root, exit early to avoid
                        // unnecessary work
                        ret.root = ret.dir = path;
                        return ret;
                    }
                }
            }
        }
        else if (utils_ts_1.isPathSeparator(code)) {
            // `path` contains just a path separator, exit early to avoid
            // unnecessary work
            ret.root = ret.dir = path;
            return ret;
        }
        if (rootEnd > 0)
            ret.root = path.slice(0, rootEnd);
        let startDot = -1;
        let startPart = rootEnd;
        let end = -1;
        let matchedSlash = true;
        let i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        let preDotState = 0;
        // Get non-dir info
        for (; i >= rootEnd; --i) {
            code = path.charCodeAt(i);
            if (utils_ts_1.isPathSeparator(code)) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === constants_ts_2.CHAR_DOT) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1)
                    startDot = i;
                else if (preDotState !== 1)
                    preDotState = 1;
            }
            else if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (startDot === -1 ||
            end === -1 ||
            // We saw a non-dot character immediately before the dot
            preDotState === 0 ||
            // The (right-most) trimmed path component is exactly '..'
            (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)) {
            if (end !== -1) {
                ret.base = ret.name = path.slice(startPart, end);
            }
        }
        else {
            ret.name = path.slice(startPart, startDot);
            ret.base = path.slice(startPart, end);
            ret.ext = path.slice(startDot, end);
        }
        // If the directory is the root, use the entire root as the `dir` including
        // the trailing slash if any (`C:\abc` -> `C:\`). Otherwise, strip out the
        // trailing slash (`C:\abc\def` -> `C:\abc`).
        if (startPart > 0 && startPart !== rootEnd) {
            ret.dir = path.slice(0, startPart - 1);
        }
        else
            ret.dir = ret.root;
        return ret;
    }
    exports.parse = parse;
});
// Copyright the Browserify authors. MIT License.
// Ported from https://github.com/browserify/path-browserify/
define("https://deno.land/std/fs/path/posix", ["require", "exports", "https://deno.land/std/fs/path/constants", "https://deno.land/std/fs/path/utils"], function (require, exports, constants_ts_3, utils_ts_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const { cwd } = Deno;
    exports.sep = "/";
    exports.delimiter = ":";
    // path.resolve([from ...], to)
    function resolve(...pathSegments) {
        let resolvedPath = "";
        let resolvedAbsolute = false;
        for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            let path;
            if (i >= 0)
                path = pathSegments[i];
            else
                path = cwd();
            utils_ts_2.assertPath(path);
            // Skip empty entries
            if (path.length === 0) {
                continue;
            }
            resolvedPath = `${path}/${resolvedPath}`;
            resolvedAbsolute = path.charCodeAt(0) === constants_ts_3.CHAR_FORWARD_SLASH;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = utils_ts_2.normalizeString(resolvedPath, !resolvedAbsolute, "/", utils_ts_2.isPosixPathSeparator);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0)
                return `/${resolvedPath}`;
            else
                return "/";
        }
        else if (resolvedPath.length > 0)
            return resolvedPath;
        else
            return ".";
    }
    exports.resolve = resolve;
    function normalize(path) {
        utils_ts_2.assertPath(path);
        if (path.length === 0)
            return ".";
        const isAbsolute = path.charCodeAt(0) === constants_ts_3.CHAR_FORWARD_SLASH;
        const trailingSeparator = path.charCodeAt(path.length - 1) === constants_ts_3.CHAR_FORWARD_SLASH;
        // Normalize the path
        path = utils_ts_2.normalizeString(path, !isAbsolute, "/", utils_ts_2.isPosixPathSeparator);
        if (path.length === 0 && !isAbsolute)
            path = ".";
        if (path.length > 0 && trailingSeparator)
            path += "/";
        if (isAbsolute)
            return `/${path}`;
        return path;
    }
    exports.normalize = normalize;
    function isAbsolute(path) {
        utils_ts_2.assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === constants_ts_3.CHAR_FORWARD_SLASH;
    }
    exports.isAbsolute = isAbsolute;
    function join(...paths) {
        if (paths.length === 0)
            return ".";
        let joined;
        for (let i = 0, len = paths.length; i < len; ++i) {
            let path = paths[i];
            utils_ts_2.assertPath(path);
            if (path.length > 0) {
                if (!joined)
                    joined = path;
                else
                    joined += `/${path}`;
            }
        }
        if (!joined)
            return ".";
        return normalize(joined);
    }
    exports.join = join;
    function relative(from, to) {
        utils_ts_2.assertPath(from);
        utils_ts_2.assertPath(to);
        if (from === to)
            return "";
        from = resolve(from);
        to = resolve(to);
        if (from === to)
            return "";
        // Trim any leading backslashes
        let fromStart = 1;
        let fromEnd = from.length;
        for (; fromStart < fromEnd; ++fromStart) {
            if (from.charCodeAt(fromStart) !== constants_ts_3.CHAR_FORWARD_SLASH)
                break;
        }
        let fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        let toStart = 1;
        const toEnd = to.length;
        for (; toStart < toEnd; ++toStart) {
            if (to.charCodeAt(toStart) !== constants_ts_3.CHAR_FORWARD_SLASH)
                break;
        }
        let toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        let length = fromLen < toLen ? fromLen : toLen;
        let lastCommonSep = -1;
        let i = 0;
        for (; i <= length; ++i) {
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === constants_ts_3.CHAR_FORWARD_SLASH) {
                        // We get here if `from` is the exact base path for `to`.
                        // For example: from='/foo/bar'; to='/foo/bar/baz'
                        return to.slice(toStart + i + 1);
                    }
                    else if (i === 0) {
                        // We get here if `from` is the root
                        // For example: from='/'; to='/foo'
                        return to.slice(toStart + i);
                    }
                }
                else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === constants_ts_3.CHAR_FORWARD_SLASH) {
                        // We get here if `to` is the exact base path for `from`.
                        // For example: from='/foo/bar/baz'; to='/foo/bar'
                        lastCommonSep = i;
                    }
                    else if (i === 0) {
                        // We get here if `to` is the root.
                        // For example: from='/foo'; to='/'
                        lastCommonSep = 0;
                    }
                }
                break;
            }
            let fromCode = from.charCodeAt(fromStart + i);
            let toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode)
                break;
            else if (fromCode === constants_ts_3.CHAR_FORWARD_SLASH)
                lastCommonSep = i;
        }
        let out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
            if (i === fromEnd || from.charCodeAt(i) === constants_ts_3.CHAR_FORWARD_SLASH) {
                if (out.length === 0)
                    out += "..";
                else
                    out += "/..";
            }
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0)
            return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === constants_ts_3.CHAR_FORWARD_SLASH)
                ++toStart;
            return to.slice(toStart);
        }
    }
    exports.relative = relative;
    function toNamespacedPath(path) {
        // Non-op on posix systems
        return path;
    }
    exports.toNamespacedPath = toNamespacedPath;
    function dirname(path) {
        utils_ts_2.assertPath(path);
        if (path.length === 0)
            return ".";
        const hasRoot = path.charCodeAt(0) === constants_ts_3.CHAR_FORWARD_SLASH;
        let end = -1;
        let matchedSlash = true;
        for (let i = path.length - 1; i >= 1; --i) {
            if (path.charCodeAt(i) === constants_ts_3.CHAR_FORWARD_SLASH) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            }
            else {
                // We saw the first non-path separator
                matchedSlash = false;
            }
        }
        if (end === -1)
            return hasRoot ? "/" : ".";
        if (hasRoot && end === 1)
            return "//";
        return path.slice(0, end);
    }
    exports.dirname = dirname;
    function basename(path, ext = "") {
        if (ext !== undefined && typeof ext !== "string")
            throw new TypeError('"ext" argument must be a string');
        utils_ts_2.assertPath(path);
        let start = 0;
        let end = -1;
        let matchedSlash = true;
        let i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path)
                return "";
            let extIdx = ext.length - 1;
            let firstNonSlashEnd = -1;
            for (i = path.length - 1; i >= 0; --i) {
                const code = path.charCodeAt(i);
                if (code === constants_ts_3.CHAR_FORWARD_SLASH) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                }
                else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) {
                                // We matched the extension, so mark this as the end of our path
                                // component
                                end = i;
                            }
                        }
                        else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end)
                end = firstNonSlashEnd;
            else if (end === -1)
                end = path.length;
            return path.slice(start, end);
        }
        else {
            for (i = path.length - 1; i >= 0; --i) {
                if (path.charCodeAt(i) === constants_ts_3.CHAR_FORWARD_SLASH) {
                    // If we reached a path separator that was not part of a set of path
                    // separators at the end of the string, stop now
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                }
                else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1)
                return "";
            return path.slice(start, end);
        }
    }
    exports.basename = basename;
    function extname(path) {
        utils_ts_2.assertPath(path);
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        let preDotState = 0;
        for (let i = path.length - 1; i >= 0; --i) {
            const code = path.charCodeAt(i);
            if (code === constants_ts_3.CHAR_FORWARD_SLASH) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === constants_ts_3.CHAR_DOT) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1)
                    startDot = i;
                else if (preDotState !== 1)
                    preDotState = 1;
            }
            else if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (startDot === -1 ||
            end === -1 ||
            // We saw a non-dot character immediately before the dot
            preDotState === 0 ||
            // The (right-most) trimmed path component is exactly '..'
            (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)) {
            return "";
        }
        return path.slice(startDot, end);
    }
    exports.extname = extname;
    function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") {
            throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`);
        }
        return utils_ts_2._format("/", pathObject);
    }
    exports.format = format;
    function parse(path) {
        utils_ts_2.assertPath(path);
        let ret = { root: "", dir: "", base: "", ext: "", name: "" };
        if (path.length === 0)
            return ret;
        let isAbsolute = path.charCodeAt(0) === constants_ts_3.CHAR_FORWARD_SLASH;
        let start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        }
        else {
            start = 0;
        }
        let startDot = -1;
        let startPart = 0;
        let end = -1;
        let matchedSlash = true;
        let i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        let preDotState = 0;
        // Get non-dir info
        for (; i >= start; --i) {
            const code = path.charCodeAt(i);
            if (code === constants_ts_3.CHAR_FORWARD_SLASH) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === constants_ts_3.CHAR_DOT) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1)
                    startDot = i;
                else if (preDotState !== 1)
                    preDotState = 1;
            }
            else if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
            }
        }
        if (startDot === -1 ||
            end === -1 ||
            // We saw a non-dot character immediately before the dot
            preDotState === 0 ||
            // The (right-most) trimmed path component is exactly '..'
            (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) {
                    ret.base = ret.name = path.slice(1, end);
                }
                else {
                    ret.base = ret.name = path.slice(startPart, end);
                }
            }
        }
        else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            }
            else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0)
            ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute)
            ret.dir = "/";
        return ret;
    }
    exports.parse = parse;
});
// Copyright the Browserify authors. MIT License.
// Ported from https://github.com/browserify/path-browserify/
define("https://deno.land/std/fs/path/mod", ["require", "exports", "https://deno.land/std/fs/path/win32", "https://deno.land/std/fs/path/posix", "https://deno.land/std/fs/path/constants"], function (require, exports, _win32, _posix, constants_ts_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    _win32 = __importStar(_win32);
    _posix = __importStar(_posix);
    const path = constants_ts_4.isWindows ? _win32 : _posix;
    exports.win32 = _win32;
    exports.posix = _posix;
    exports.resolve = path.resolve;
    exports.normalize = path.normalize;
    exports.isAbsolute = path.isAbsolute;
    exports.join = path.join;
    exports.relative = path.relative;
    exports.toNamespacedPath = path.toNamespacedPath;
    exports.dirname = path.dirname;
    exports.basename = path.basename;
    exports.extname = path.extname;
    exports.format = path.format;
    exports.parse = path.parse;
    exports.sep = path.sep;
    exports.delimiter = path.delimiter;
});
define("https://deno.land/std/fs/path", ["require", "exports", "https://deno.land/std/fs/path/mod"], function (require, exports, mod_ts_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    // Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
    __export(mod_ts_1);
});
define("https://deno.land/std/io/util", ["require", "exports", "https://deno.land/std/strings/mod", "https://deno.land/std/fs/path"], function (require, exports, mod_ts_2, path) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    path = __importStar(path);
    // Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
    const { Buffer, mkdir, open } = Deno;
    // `off` is the offset into `dst` where it will at which to begin writing values
    // from `src`.
    // Returns the number of bytes copied.
    function copyBytes(dst, src, off = 0) {
        off = Math.max(0, Math.min(off, dst.byteLength));
        const r = dst.byteLength - off;
        if (src.byteLength > r) {
            src = src.subarray(0, r);
        }
        dst.set(src, off);
        return src.byteLength;
    }
    exports.copyBytes = copyBytes;
    function charCode(s) {
        return s.charCodeAt(0);
    }
    exports.charCode = charCode;
    function stringsReader(s) {
        return new Buffer(mod_ts_2.encode(s).buffer);
    }
    exports.stringsReader = stringsReader;
    /** Create or open a temporal file at specified directory with prefix and
     *  postfix
     * */
    async function tempFile(dir, opts = { prefix: "", postfix: "" }) {
        const r = Math.floor(Math.random() * 1000000);
        const filepath = path.resolve(`${dir}/${opts.prefix || ""}${r}${opts.postfix || ""}`);
        await mkdir(path.dirname(filepath), true);
        const file = await open(filepath, "a");
        return { file, filepath };
    }
    exports.tempFile = tempFile;
});
define("https://deno.land/std/colors/mod", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
    const { noColor } = Deno;
    let enabled = !noColor;
    function setEnabled(value) {
        if (noColor) {
            return;
        }
        enabled = value;
    }
    exports.setEnabled = setEnabled;
    function getEnabled() {
        return enabled;
    }
    exports.getEnabled = getEnabled;
    function code(open, close) {
        return {
            open: `\x1b[${open}m`,
            close: `\x1b[${close}m`,
            regexp: new RegExp(`\\x1b\\[${close}m`, "g")
        };
    }
    function run(str, code) {
        return enabled
            ? `${code.open}${str.replace(code.regexp, code.open)}${code.close}`
            : str;
    }
    function reset(str) {
        return run(str, code(0, 0));
    }
    exports.reset = reset;
    function bold(str) {
        return run(str, code(1, 22));
    }
    exports.bold = bold;
    function dim(str) {
        return run(str, code(2, 22));
    }
    exports.dim = dim;
    function italic(str) {
        return run(str, code(3, 23));
    }
    exports.italic = italic;
    function underline(str) {
        return run(str, code(4, 24));
    }
    exports.underline = underline;
    function inverse(str) {
        return run(str, code(7, 27));
    }
    exports.inverse = inverse;
    function hidden(str) {
        return run(str, code(8, 28));
    }
    exports.hidden = hidden;
    function strikethrough(str) {
        return run(str, code(9, 29));
    }
    exports.strikethrough = strikethrough;
    function black(str) {
        return run(str, code(30, 39));
    }
    exports.black = black;
    function red(str) {
        return run(str, code(31, 39));
    }
    exports.red = red;
    function green(str) {
        return run(str, code(32, 39));
    }
    exports.green = green;
    function yellow(str) {
        return run(str, code(33, 39));
    }
    exports.yellow = yellow;
    function blue(str) {
        return run(str, code(34, 39));
    }
    exports.blue = blue;
    function magenta(str) {
        return run(str, code(35, 39));
    }
    exports.magenta = magenta;
    function cyan(str) {
        return run(str, code(36, 39));
    }
    exports.cyan = cyan;
    function white(str) {
        return run(str, code(37, 39));
    }
    exports.white = white;
    function gray(str) {
        return run(str, code(90, 39));
    }
    exports.gray = gray;
    function bgBlack(str) {
        return run(str, code(40, 49));
    }
    exports.bgBlack = bgBlack;
    function bgRed(str) {
        return run(str, code(41, 49));
    }
    exports.bgRed = bgRed;
    function bgGreen(str) {
        return run(str, code(42, 49));
    }
    exports.bgGreen = bgGreen;
    function bgYellow(str) {
        return run(str, code(43, 49));
    }
    exports.bgYellow = bgYellow;
    function bgBlue(str) {
        return run(str, code(44, 49));
    }
    exports.bgBlue = bgBlue;
    function bgMagenta(str) {
        return run(str, code(45, 49));
    }
    exports.bgMagenta = bgMagenta;
    function bgCyan(str) {
        return run(str, code(46, 49));
    }
    exports.bgCyan = bgCyan;
    function bgWhite(str) {
        return run(str, code(47, 49));
    }
    exports.bgWhite = bgWhite;
});
define("https://deno.land/std/testing/diff", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DiffType;
    (function (DiffType) {
        DiffType["removed"] = "removed";
        DiffType["common"] = "common";
        DiffType["added"] = "added";
    })(DiffType = exports.DiffType || (exports.DiffType = {}));
    const REMOVED = 1;
    const COMMON = 2;
    const ADDED = 3;
    function createCommon(A, B, reverse) {
        const common = [];
        if (A.length === 0 || B.length === 0)
            return [];
        for (let i = 0; i < Math.min(A.length, B.length); i += 1) {
            if (A[reverse ? A.length - i - 1 : i] === B[reverse ? B.length - i - 1 : i]) {
                common.push(A[reverse ? A.length - i - 1 : i]);
            }
            else {
                return common;
            }
        }
        return common;
    }
    function diff(A, B) {
        const prefixCommon = createCommon(A, B);
        const suffixCommon = createCommon(A.slice(prefixCommon.length), B.slice(prefixCommon.length), true).reverse();
        A = suffixCommon.length
            ? A.slice(prefixCommon.length, -suffixCommon.length)
            : A.slice(prefixCommon.length);
        B = suffixCommon.length
            ? B.slice(prefixCommon.length, -suffixCommon.length)
            : B.slice(prefixCommon.length);
        const swapped = B.length > A.length;
        [A, B] = swapped ? [B, A] : [A, B];
        const M = A.length;
        const N = B.length;
        if (!M && !N && !suffixCommon.length && !prefixCommon.length)
            return [];
        if (!N) {
            return [
                ...prefixCommon.map((c) => ({ type: DiffType.common, value: c })),
                ...A.map((a) => ({
                    type: swapped ? DiffType.added : DiffType.removed,
                    value: a
                })),
                ...suffixCommon.map((c) => ({ type: DiffType.common, value: c }))
            ];
        }
        const offset = N;
        const delta = M - N;
        const size = M + N + 1;
        const fp = new Array(size).fill({ y: -1 });
        /**
         * INFO:
         * This buffer is used to save memory and improve performance.
         * The first half is used to save route and last half is used to save diff
         * type.
         * This is because, when I kept new uint8array area to save type,performance
         * worsened.
         */
        const routes = new Uint32Array((M * N + size + 1) * 2);
        const diffTypesPtrOffset = routes.length / 2;
        let ptr = 0;
        let p = -1;
        function backTrace(A, B, current, swapped) {
            const M = A.length;
            const N = B.length;
            const result = [];
            let a = M - 1;
            let b = N - 1;
            let j = routes[current.id];
            let type = routes[current.id + diffTypesPtrOffset];
            while (true) {
                if (!j && !type)
                    break;
                const prev = j;
                if (type === REMOVED) {
                    result.unshift({
                        type: swapped ? DiffType.removed : DiffType.added,
                        value: B[b]
                    });
                    b -= 1;
                }
                else if (type === ADDED) {
                    result.unshift({
                        type: swapped ? DiffType.added : DiffType.removed,
                        value: A[a]
                    });
                    a -= 1;
                }
                else {
                    result.unshift({ type: DiffType.common, value: A[a] });
                    a -= 1;
                    b -= 1;
                }
                j = routes[prev];
                type = routes[prev + diffTypesPtrOffset];
            }
            return result;
        }
        function createFP(slide, down, k, M) {
            if (slide && slide.y === -1 && (down && down.y === -1))
                return { y: 0, id: 0 };
            if ((down && down.y === -1) ||
                k === M ||
                (slide && slide.y) > (down && down.y) + 1) {
                const prev = slide.id;
                ptr++;
                routes[ptr] = prev;
                routes[ptr + diffTypesPtrOffset] = ADDED;
                return { y: slide.y, id: ptr };
            }
            else {
                const prev = down.id;
                ptr++;
                routes[ptr] = prev;
                routes[ptr + diffTypesPtrOffset] = REMOVED;
                return { y: down.y + 1, id: ptr };
            }
        }
        function snake(k, slide, down, _offset, A, B) {
            const M = A.length;
            const N = B.length;
            if (k < -N || M < k)
                return { y: -1, id: -1 };
            const fp = createFP(slide, down, k, M);
            while (fp.y + k < M && fp.y < N && A[fp.y + k] === B[fp.y]) {
                const prev = fp.id;
                ptr++;
                fp.id = ptr;
                fp.y += 1;
                routes[ptr] = prev;
                routes[ptr + diffTypesPtrOffset] = COMMON;
            }
            return fp;
        }
        while (fp[delta + offset].y < N) {
            p = p + 1;
            for (let k = -p; k < delta; ++k) {
                fp[k + offset] = snake(k, fp[k - 1 + offset], fp[k + 1 + offset], offset, A, B);
            }
            for (let k = delta + p; k > delta; --k) {
                fp[k + offset] = snake(k, fp[k - 1 + offset], fp[k + 1 + offset], offset, A, B);
            }
            fp[delta + offset] = snake(delta, fp[delta - 1 + offset], fp[delta + 1 + offset], offset, A, B);
        }
        return [
            ...prefixCommon.map((c) => ({ type: DiffType.common, value: c })),
            ...backTrace(A, B, fp[delta + offset], swapped),
            ...suffixCommon.map((c) => ({ type: DiffType.common, value: c }))
        ];
    }
    exports.default = diff;
});
define("https://deno.land/std/testing/format", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const toString = Object.prototype.toString;
    const toISOString = Date.prototype.toISOString;
    const errorToString = Error.prototype.toString;
    const regExpToString = RegExp.prototype.toString;
    const symbolToString = Symbol.prototype.toString;
    const DEFAULT_OPTIONS = {
        callToJSON: true,
        escapeRegex: false,
        escapeString: true,
        indent: 2,
        maxDepth: Infinity,
        min: false,
        printFunctionName: true
    };
    /**
     * Explicitly comparing typeof constructor to function avoids undefined as name
     * when mock identity-obj-proxy returns the key as the value for any key.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getConstructorName = (val) => (typeof val.constructor === "function" && val.constructor.name) || "Object";
    /* global window */
    /** Is val is equal to global window object?
     *  Works even if it does not exist :)
     * */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isWindow = (val) => typeof window !== "undefined" && val === window;
    const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
    function isToStringedArrayType(toStringed) {
        return (toStringed === "[object Array]" ||
            toStringed === "[object ArrayBuffer]" ||
            toStringed === "[object DataView]" ||
            toStringed === "[object Float32Array]" ||
            toStringed === "[object Float64Array]" ||
            toStringed === "[object Int8Array]" ||
            toStringed === "[object Int16Array]" ||
            toStringed === "[object Int32Array]" ||
            toStringed === "[object Uint8Array]" ||
            toStringed === "[object Uint8ClampedArray]" ||
            toStringed === "[object Uint16Array]" ||
            toStringed === "[object Uint32Array]");
    }
    function printNumber(val) {
        return Object.is(val, -0) ? "-0" : String(val);
    }
    function printFunction(val, printFunctionName) {
        if (!printFunctionName) {
            return "[Function]";
        }
        return "[Function " + (val.name || "anonymous") + "]";
    }
    function printSymbol(val) {
        return symbolToString.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
    }
    function printError(val) {
        return "[" + errorToString.call(val) + "]";
    }
    /**
     * The first port of call for printing an object, handles most of the
     * data-types in JS.
     */
    function printBasicValue(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    val, { printFunctionName, escapeRegex, escapeString }) {
        if (val === true || val === false) {
            return String(val);
        }
        if (val === undefined) {
            return "undefined";
        }
        if (val === null) {
            return "null";
        }
        const typeOf = typeof val;
        if (typeOf === "number") {
            return printNumber(val);
        }
        if (typeOf === "string") {
            if (escapeString) {
                return `"${val.replace(/"|\\/g, "\\$&")}"`;
            }
            return `"${val}"`;
        }
        if (typeOf === "function") {
            return printFunction(val, printFunctionName);
        }
        if (typeOf === "symbol") {
            return printSymbol(val);
        }
        const toStringed = toString.call(val);
        if (toStringed === "[object WeakMap]") {
            return "WeakMap {}";
        }
        if (toStringed === "[object WeakSet]") {
            return "WeakSet {}";
        }
        if (toStringed === "[object Function]" ||
            toStringed === "[object GeneratorFunction]") {
            return printFunction(val, printFunctionName);
        }
        if (toStringed === "[object Symbol]") {
            return printSymbol(val);
        }
        if (toStringed === "[object Date]") {
            return isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
        }
        if (toStringed === "[object Error]") {
            return printError(val);
        }
        if (toStringed === "[object RegExp]") {
            if (escapeRegex) {
                // https://github.com/benjamingr/RegExp.escape/blob/master/polyfill.js
                return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
            }
            return regExpToString.call(val);
        }
        if (val instanceof Error) {
            return printError(val);
        }
        return null;
    }
    function printer(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    val, config, indentation, depth, refs, hasCalledToJSON) {
        const basicResult = printBasicValue(val, config);
        if (basicResult !== null) {
            return basicResult;
        }
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);
    }
    /**
     * Return items (for example, of an array)
     * with spacing, indentation, and comma
     * without surrounding punctuation (for example, brackets)
     */
    function printListItems(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    list, config, indentation, depth, refs, printer) {
        let result = "";
        if (list.length) {
            result += config.spacingOuter;
            const indentationNext = indentation + config.indent;
            for (let i = 0; i < list.length; i++) {
                result +=
                    indentationNext +
                        printer(list[i], config, indentationNext, depth, refs);
                if (i < list.length - 1) {
                    result += "," + config.spacingInner;
                }
                else if (!config.min) {
                    result += ",";
                }
            }
            result += config.spacingOuter + indentation;
        }
        return result;
    }
    /**
     * Return entries (for example, of a map)
     * with spacing, indentation, and comma
     * without surrounding punctuation (for example, braces)
     */
    function printIteratorEntries(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    iterator, config, indentation, depth, refs, printer, 
    // Too bad, so sad that separator for ECMAScript Map has been ' => '
    // What a distracting diff if you change a data structure to/from
    // ECMAScript Object or Immutable.Map/OrderedMap which use the default.
    separator = ": ") {
        let result = "";
        let current = iterator.next();
        if (!current.done) {
            result += config.spacingOuter;
            const indentationNext = indentation + config.indent;
            while (!current.done) {
                const name = printer(current.value[0], config, indentationNext, depth, refs);
                const value = printer(current.value[1], config, indentationNext, depth, refs);
                result += indentationNext + name + separator + value;
                current = iterator.next();
                if (!current.done) {
                    result += "," + config.spacingInner;
                }
                else if (!config.min) {
                    result += ",";
                }
            }
            result += config.spacingOuter + indentation;
        }
        return result;
    }
    /**
     * Return values (for example, of a set)
     * with spacing, indentation, and comma
     * without surrounding punctuation (braces or brackets)
     */
    function printIteratorValues(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    iterator, config, indentation, depth, refs, printer) {
        let result = "";
        let current = iterator.next();
        if (!current.done) {
            result += config.spacingOuter;
            const indentationNext = indentation + config.indent;
            while (!current.done) {
                result +=
                    indentationNext +
                        printer(current.value, config, indentationNext, depth, refs);
                current = iterator.next();
                if (!current.done) {
                    result += "," + config.spacingInner;
                }
                else if (!config.min) {
                    result += ",";
                }
            }
            result += config.spacingOuter + indentation;
        }
        return result;
    }
    const getKeysOfEnumerableProperties = (object) => {
        const keys = Object.keys(object).sort();
        if (Object.getOwnPropertySymbols) {
            Object.getOwnPropertySymbols(object).forEach((symbol) => {
                if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) {
                    keys.push(symbol);
                }
            });
        }
        return keys;
    };
    /**
     * Return properties of an object
     * with spacing, indentation, and comma
     * without surrounding punctuation (for example, braces)
     */
    function printObjectProperties(val, config, indentation, depth, refs, printer) {
        let result = "";
        const keys = getKeysOfEnumerableProperties(val);
        if (keys.length) {
            result += config.spacingOuter;
            const indentationNext = indentation + config.indent;
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const name = printer(key, config, indentationNext, depth, refs);
                const value = printer(val[key], config, indentationNext, depth, refs);
                result += indentationNext + name + ": " + value;
                if (i < keys.length - 1) {
                    result += "," + config.spacingInner;
                }
                else if (!config.min) {
                    result += ",";
                }
            }
            result += config.spacingOuter + indentation;
        }
        return result;
    }
    /**
     * Handles more complex objects ( such as objects with circular references.
     * maps and sets etc )
     */
    function printComplexValue(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    val, config, indentation, depth, refs, hasCalledToJSON) {
        if (refs.indexOf(val) !== -1) {
            return "[Circular]";
        }
        refs = refs.slice();
        refs.push(val);
        const hitMaxDepth = ++depth > config.maxDepth;
        const { min, callToJSON } = config;
        if (callToJSON &&
            !hitMaxDepth &&
            val.toJSON &&
            typeof val.toJSON === "function" &&
            !hasCalledToJSON) {
            return printer(val.toJSON(), config, indentation, depth, refs, true);
        }
        const toStringed = toString.call(val);
        if (toStringed === "[object Arguments]") {
            return hitMaxDepth
                ? "[Arguments]"
                : (min ? "" : "Arguments ") +
                    "[" +
                    printListItems(val, config, indentation, depth, refs, printer) +
                    "]";
        }
        if (isToStringedArrayType(toStringed)) {
            return hitMaxDepth
                ? `[${val.constructor.name}]`
                : (min ? "" : `${val.constructor.name} `) +
                    "[" +
                    printListItems(val, config, indentation, depth, refs, printer) +
                    "]";
        }
        if (toStringed === "[object Map]") {
            return hitMaxDepth
                ? "[Map]"
                : "Map {" +
                    printIteratorEntries(val.entries(), config, indentation, depth, refs, printer, " => ") +
                    "}";
        }
        if (toStringed === "[object Set]") {
            return hitMaxDepth
                ? "[Set]"
                : "Set {" +
                    printIteratorValues(val.values(), config, indentation, depth, refs, printer) +
                    "}";
        }
        // Avoid failure to serialize global window object in jsdom test environment.
        // For example, not even relevant if window is prop of React element.
        return hitMaxDepth || isWindow(val)
            ? "[" + getConstructorName(val) + "]"
            : (min ? "" : getConstructorName(val) + " ") +
                "{" +
                printObjectProperties(val, config, indentation, depth, refs, printer) +
                "}";
    }
    // TODO this is better done with `.padStart()`
    function createIndent(indent) {
        return new Array(indent + 1).join(" ");
    }
    const getConfig = (options) => ({
        ...options,
        indent: options.min ? "" : createIndent(options.indent),
        spacingInner: options.min ? " " : "\n",
        spacingOuter: options.min ? "" : "\n"
    });
    /**
     * Returns a presentation string of your `val` object
     * @param val any potential JavaScript object
     * @param options Custom settings
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function format(val, options = {}) {
        const opts = {
            ...DEFAULT_OPTIONS,
            ...options
        };
        const basicResult = printBasicValue(val, opts);
        if (basicResult !== null) {
            return basicResult;
        }
        return printComplexValue(val, getConfig(opts), "", 0, []);
    }
    exports.format = format;
});
// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
define("https://deno.land/std/testing/pretty", ["require", "exports", "https://deno.land/std/testing/asserts", "https://deno.land/std/colors/mod", "https://deno.land/std/testing/diff", "https://deno.land/std/testing/format"], function (require, exports, asserts_ts_1, mod_ts_3, diff_ts_1, format_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    diff_ts_1 = __importStar(diff_ts_1);
    const CAN_NOT_DISPLAY = "[Cannot display]";
    function createStr(v) {
        try {
            return format_ts_1.format(v);
        }
        catch (e) {
            return mod_ts_3.red(CAN_NOT_DISPLAY);
        }
    }
    function createColor(diffType) {
        switch (diffType) {
            case diff_ts_1.DiffType.added:
                return (s) => mod_ts_3.green(mod_ts_3.bold(s));
            case diff_ts_1.DiffType.removed:
                return (s) => mod_ts_3.red(mod_ts_3.bold(s));
            default:
                return mod_ts_3.white;
        }
    }
    function createSign(diffType) {
        switch (diffType) {
            case diff_ts_1.DiffType.added:
                return "+   ";
            case diff_ts_1.DiffType.removed:
                return "-   ";
            default:
                return "    ";
        }
    }
    function buildMessage(diffResult) {
        const messages = [];
        messages.push("");
        messages.push("");
        messages.push(`    ${mod_ts_3.gray(mod_ts_3.bold("[Diff]"))} ${mod_ts_3.red(mod_ts_3.bold("Left"))} / ${mod_ts_3.green(mod_ts_3.bold("Right"))}`);
        messages.push("");
        messages.push("");
        diffResult.forEach((result) => {
            const c = createColor(result.type);
            messages.push(c(`${createSign(result.type)}${result.value}`));
        });
        messages.push("");
        return messages;
    }
    function assertEquals(actual, expected, msg) {
        if (asserts_ts_1.equal(actual, expected)) {
            return;
        }
        let message = "";
        const actualString = createStr(actual);
        const expectedString = createStr(expected);
        try {
            const diffResult = diff_ts_1.default(actualString.split("\n"), expectedString.split("\n"));
            message = buildMessage(diffResult).join("\n");
        }
        catch (e) {
            message = `\n${mod_ts_3.red(CAN_NOT_DISPLAY)} + \n\n`;
        }
        if (msg) {
            message = msg;
        }
        throw new Error(message);
    }
    exports.assertEquals = assertEquals;
});
define("https://deno.land/std/testing/asserts", ["require", "exports", "https://deno.land/std/testing/pretty"], function (require, exports, pretty_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AssertionError extends Error {
        constructor(message) {
            super(message);
            this.name = "AssertionError";
        }
    }
    exports.AssertionError = AssertionError;
    function equal(c, d) {
        const seen = new Map();
        return (function compare(a, b) {
            if (a && a instanceof Set && b && b instanceof Set) {
                if (a.size !== b.size) {
                    return false;
                }
                for (const item of b) {
                    if (!a.has(item)) {
                        return false;
                    }
                }
                return true;
            }
            // Have to render RegExp & Date for string comparison
            // unless it's mistreated as object
            if (a &&
                b &&
                ((a instanceof RegExp && b instanceof RegExp) ||
                    (a instanceof Date && b instanceof Date))) {
                return String(a) === String(b);
            }
            if (Object.is(a, b)) {
                return true;
            }
            if (a && typeof a === "object" && b && typeof b === "object") {
                if (seen.get(a) === b) {
                    return true;
                }
                if (Object.keys(a || {}).length !== Object.keys(b || {}).length) {
                    return false;
                }
                const merged = { ...a, ...b };
                for (const key in merged) {
                    if (!compare(a && a[key], b && b[key])) {
                        return false;
                    }
                }
                seen.set(a, b);
                return true;
            }
            return false;
        })(c, d);
    }
    exports.equal = equal;
    /** Make an assertion, if not `true`, then throw. */
    function assert(expr, msg = "") {
        if (!expr) {
            throw new AssertionError(msg);
        }
    }
    exports.assert = assert;
    /**
     * Make an assertion that `actual` and `expected` are equal, deeply. If not
     * deeply equal, then throw.
     */
    function assertEquals(actual, expected, msg) {
        pretty_ts_1.assertEquals(actual, expected, msg);
    }
    exports.assertEquals = assertEquals;
    /**
     * Make an assertion that `actual` and `expected` are not equal, deeply.
     * If not then throw.
     */
    function assertNotEquals(actual, expected, msg) {
        if (!equal(actual, expected)) {
            return;
        }
        let actualString;
        let expectedString;
        try {
            actualString = String(actual);
        }
        catch (e) {
            actualString = "[Cannot display]";
        }
        try {
            expectedString = String(expected);
        }
        catch (e) {
            expectedString = "[Cannot display]";
        }
        if (!msg) {
            msg = `actual: ${actualString} expected: ${expectedString}`;
        }
        throw new AssertionError(msg);
    }
    exports.assertNotEquals = assertNotEquals;
    /**
     * Make an assertion that `actual` and `expected` are strictly equal.  If
     * not then throw.
     */
    function assertStrictEq(actual, expected, msg) {
        if (actual !== expected) {
            let actualString;
            let expectedString;
            try {
                actualString = String(actual);
            }
            catch (e) {
                actualString = "[Cannot display]";
            }
            try {
                expectedString = String(expected);
            }
            catch (e) {
                expectedString = "[Cannot display]";
            }
            if (!msg) {
                msg = `actual: ${actualString} expected: ${expectedString}`;
            }
            throw new AssertionError(msg);
        }
    }
    exports.assertStrictEq = assertStrictEq;
    /**
     * Make an assertion that actual contains expected. If not
     * then thrown.
     */
    function assertStrContains(actual, expected, msg) {
        if (!actual.includes(expected)) {
            if (!msg) {
                msg = `actual: "${actual}" expected to contains: "${expected}"`;
            }
            throw new AssertionError(msg);
        }
    }
    exports.assertStrContains = assertStrContains;
    /**
     * Make an assertion that `actual` contains the `expected` values
     * If not then thrown.
     */
    function assertArrayContains(actual, expected, msg) {
        let missing = [];
        for (let i = 0; i < expected.length; i++) {
            let found = false;
            for (let j = 0; j < actual.length; j++) {
                if (equal(expected[i], actual[j])) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                missing.push(expected[i]);
            }
        }
        if (missing.length === 0) {
            return;
        }
        if (!msg) {
            msg = `actual: "${actual}" expected to contains: "${expected}"`;
            msg += "\n";
            msg += `missing: ${missing}`;
        }
        throw new AssertionError(msg);
    }
    exports.assertArrayContains = assertArrayContains;
    /**
     * Make an assertion that `actual` match RegExp `expected`. If not
     * then thrown
     */
    function assertMatch(actual, expected, msg) {
        if (!expected.test(actual)) {
            if (!msg) {
                msg = `actual: "${actual}" expected to match: "${expected}"`;
            }
            throw new AssertionError(msg);
        }
    }
    exports.assertMatch = assertMatch;
    /**
     * Forcefully throws a failed assertion
     */
    function fail(msg) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        assert(false, `Failed assertion${msg ? `: ${msg}` : "."}`);
    }
    exports.fail = fail;
    /** Executes a function, expecting it to throw.  If it does not, then it
     * throws.  An error class and a string that should be included in the
     * error message can also be asserted.
     */
    function assertThrows(fn, ErrorClass, msgIncludes = "", msg) {
        let doesThrow = false;
        try {
            fn();
        }
        catch (e) {
            if (ErrorClass && !(Object.getPrototypeOf(e) === ErrorClass.prototype)) {
                msg = `Expected error to be instance of "${ErrorClass.name}"${msg ? `: ${msg}` : "."}`;
                throw new AssertionError(msg);
            }
            if (msgIncludes && !e.message.includes(msgIncludes)) {
                msg = `Expected error message to include "${msgIncludes}", but got "${e.message}"${msg ? `: ${msg}` : "."}`;
                throw new AssertionError(msg);
            }
            doesThrow = true;
        }
        if (!doesThrow) {
            msg = `Expected function to throw${msg ? `: ${msg}` : "."}`;
            throw new AssertionError(msg);
        }
    }
    exports.assertThrows = assertThrows;
    async function assertThrowsAsync(fn, ErrorClass, msgIncludes = "", msg) {
        let doesThrow = false;
        try {
            await fn();
        }
        catch (e) {
            if (ErrorClass && !(Object.getPrototypeOf(e) === ErrorClass.prototype)) {
                msg = `Expected error to be instance of "${ErrorClass.name}"${msg ? `: ${msg}` : "."}`;
                throw new AssertionError(msg);
            }
            if (msgIncludes && !e.message.includes(msgIncludes)) {
                msg = `Expected error message to include "${msgIncludes}", but got "${e.message}"${msg ? `: ${msg}` : "."}`;
                throw new AssertionError(msg);
            }
            doesThrow = true;
        }
        if (!doesThrow) {
            msg = `Expected function to throw${msg ? `: ${msg}` : "."}`;
            throw new AssertionError(msg);
        }
    }
    exports.assertThrowsAsync = assertThrowsAsync;
    /** Use this to stub out methods that will throw when invoked. */
    function unimplemented(msg) {
        throw new AssertionError(msg || "unimplemented");
    }
    exports.unimplemented = unimplemented;
    /** Use this to assert unreachable code. */
    function unreachable() {
        throw new AssertionError("unreachable");
    }
    exports.unreachable = unreachable;
});
// Based on https://github.com/golang/go/blob/891682/src/bufio/bufio.go
// Copyright 2009 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
define("https://deno.land/std/io/bufio", ["require", "exports", "https://deno.land/std/io/util", "https://deno.land/std/testing/asserts"], function (require, exports, util_ts_1, asserts_ts_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const DEFAULT_BUF_SIZE = 4096;
    const MIN_BUF_SIZE = 16;
    const MAX_CONSECUTIVE_EMPTY_READS = 100;
    const CR = util_ts_1.charCode("\r");
    const LF = util_ts_1.charCode("\n");
    class BufferFullError extends Error {
        constructor(partial) {
            super("Buffer full");
            this.partial = partial;
            this.name = "BufferFullError";
        }
    }
    exports.BufferFullError = BufferFullError;
    class UnexpectedEOFError extends Error {
        constructor() {
            super("Unexpected EOF");
            this.name = "UnexpectedEOFError";
        }
    }
    exports.UnexpectedEOFError = UnexpectedEOFError;
    exports.EOF = Symbol("EOF");
    /** BufReader implements buffering for a Reader object. */
    class BufReader {
        constructor(rd, size = DEFAULT_BUF_SIZE) {
            this.r = 0; // buf read position.
            this.w = 0; // buf write position.
            this.eof = false;
            if (size < MIN_BUF_SIZE) {
                size = MIN_BUF_SIZE;
            }
            this._reset(new Uint8Array(size), rd);
        }
        // private lastByte: number;
        // private lastCharSize: number;
        /** return new BufReader unless r is BufReader */
        static create(r, size = DEFAULT_BUF_SIZE) {
            return r instanceof BufReader ? r : new BufReader(r, size);
        }
        /** Returns the size of the underlying buffer in bytes. */
        size() {
            return this.buf.byteLength;
        }
        buffered() {
            return this.w - this.r;
        }
        // Reads a new chunk into the buffer.
        async _fill() {
            // Slide existing data to beginning.
            if (this.r > 0) {
                this.buf.copyWithin(0, this.r, this.w);
                this.w -= this.r;
                this.r = 0;
            }
            if (this.w >= this.buf.byteLength) {
                throw Error("bufio: tried to fill full buffer");
            }
            // Read new data: try a limited number of times.
            for (let i = MAX_CONSECUTIVE_EMPTY_READS; i > 0; i--) {
                let rr = await this.rd.read(this.buf.subarray(this.w));
                asserts_ts_2.assert(rr.nread >= 0, "negative read");
                this.w += rr.nread;
                if (rr.eof) {
                    this.eof = true;
                    return;
                }
                if (rr.nread > 0) {
                    return;
                }
            }
            throw new Error(`No progress after ${MAX_CONSECUTIVE_EMPTY_READS} read() calls`);
        }
        /** Discards any buffered data, resets all state, and switches
         * the buffered reader to read from r.
         */
        reset(r) {
            this._reset(this.buf, r);
        }
        _reset(buf, rd) {
            this.buf = buf;
            this.rd = rd;
            this.eof = false;
            // this.lastByte = -1;
            // this.lastCharSize = -1;
        }
        /** reads data into p.
         * It returns the number of bytes read into p.
         * The bytes are taken from at most one Read on the underlying Reader,
         * hence n may be less than len(p).
         * To read exactly len(p) bytes, use io.ReadFull(b, p).
         */
        async read(p) {
            let rr = { nread: p.byteLength, eof: false };
            if (p.byteLength === 0)
                return rr;
            if (this.r === this.w) {
                if (p.byteLength >= this.buf.byteLength) {
                    // Large read, empty buffer.
                    // Read directly into p to avoid copy.
                    const rr = await this.rd.read(p);
                    asserts_ts_2.assert(rr.nread >= 0, "negative read");
                    // if (rr.nread > 0) {
                    //   this.lastByte = p[rr.nread - 1];
                    //   this.lastCharSize = -1;
                    // }
                    return rr;
                }
                // One read.
                // Do not use this.fill, which will loop.
                this.r = 0;
                this.w = 0;
                rr = await this.rd.read(this.buf);
                asserts_ts_2.assert(rr.nread >= 0, "negative read");
                if (rr.nread === 0)
                    return rr;
                this.w += rr.nread;
            }
            // copy as much as we can
            rr.nread = util_ts_1.copyBytes(p, this.buf.subarray(this.r, this.w), 0);
            this.r += rr.nread;
            // this.lastByte = this.buf[this.r - 1];
            // this.lastCharSize = -1;
            return rr;
        }
        /** reads exactly `p.length` bytes into `p`.
         *
         * If successful, `p` is returned.
         *
         * If the end of the underlying stream has been reached, and there are no more
         * bytes available in the buffer, `readFull()` returns `EOF` instead.
         *
         * An error is thrown if some bytes could be read, but not enough to fill `p`
         * entirely before the underlying stream reported an error or EOF. Any error
         * thrown will have a `partial` property that indicates the slice of the
         * buffer that has been successfully filled with data.
         *
         * Ported from https://golang.org/pkg/io/#ReadFull
         */
        async readFull(p) {
            let bytesRead = 0;
            while (bytesRead < p.length) {
                try {
                    const rr = await this.read(p.subarray(bytesRead));
                    bytesRead += rr.nread;
                    if (rr.eof) {
                        if (bytesRead === 0) {
                            return exports.EOF;
                        }
                        else {
                            throw new UnexpectedEOFError();
                        }
                    }
                }
                catch (err) {
                    err.partial = p.subarray(0, bytesRead);
                    throw err;
                }
            }
            return p;
        }
        /** Returns the next byte [0, 255] or `EOF`. */
        async readByte() {
            while (this.r === this.w) {
                if (this.eof)
                    return exports.EOF;
                await this._fill(); // buffer is empty.
            }
            const c = this.buf[this.r];
            this.r++;
            // this.lastByte = c;
            return c;
        }
        /** readString() reads until the first occurrence of delim in the input,
         * returning a string containing the data up to and including the delimiter.
         * If ReadString encounters an error before finding a delimiter,
         * it returns the data read before the error and the error itself
         * (often io.EOF).
         * ReadString returns err != nil if and only if the returned data does not end
         * in
         * delim.
         * For simple uses, a Scanner may be more convenient.
         */
        async readString(_delim) {
            throw new Error("Not implemented");
        }
        /** `readLine()` is a low-level line-reading primitive. Most callers should
         * use `readString('\n')` instead or use a Scanner.
         *
         * `readLine()` tries to return a single line, not including the end-of-line
         * bytes. If the line was too long for the buffer then `more` is set and the
         * beginning of the line is returned. The rest of the line will be returned
         * from future calls. `more` will be false when returning the last fragment
         * of the line. The returned buffer is only valid until the next call to
         * `readLine()`.
         *
         * The text returned from ReadLine does not include the line end ("\r\n" or
         * "\n").
         *
         * When the end of the underlying stream is reached, the final bytes in the
         * stream are returned. No indication or error is given if the input ends
         * without a final line end. When there are no more trailing bytes to read,
         * `readLine()` returns the `EOF` symbol.
         *
         * Calling `unreadByte()` after `readLine()` will always unread the last byte
         * read (possibly a character belonging to the line end) even if that byte is
         * not part of the line returned by `readLine()`.
         */
        async readLine() {
            let line;
            try {
                line = await this.readSlice(LF);
            }
            catch (err) {
                let { partial } = err;
                asserts_ts_2.assert(partial instanceof Uint8Array, "bufio: caught error from `readSlice()` without `partial` property");
                // Don't throw if `readSlice()` failed with `BufferFullError`, instead we
                // just return whatever is available and set the `more` flag.
                if (!(err instanceof BufferFullError)) {
                    throw err;
                }
                // Handle the case where "\r\n" straddles the buffer.
                if (!this.eof &&
                    partial.byteLength > 0 &&
                    partial[partial.byteLength - 1] === CR) {
                    // Put the '\r' back on buf and drop it from line.
                    // Let the next call to ReadLine check for "\r\n".
                    asserts_ts_2.assert(this.r > 0, "bufio: tried to rewind past start of buffer");
                    this.r--;
                    partial = partial.subarray(0, partial.byteLength - 1);
                }
                return { line: partial, more: !this.eof };
            }
            if (line === exports.EOF) {
                return exports.EOF;
            }
            if (line.byteLength === 0) {
                return { line, more: false };
            }
            if (line[line.byteLength - 1] == LF) {
                let drop = 1;
                if (line.byteLength > 1 && line[line.byteLength - 2] === CR) {
                    drop = 2;
                }
                line = line.subarray(0, line.byteLength - drop);
            }
            return { line, more: false };
        }
        /** `readSlice()` reads until the first occurrence of `delim` in the input,
         * returning a slice pointing at the bytes in the buffer. The bytes stop
         * being valid at the next read.
         *
         * If `readSlice()` encounters an error before finding a delimiter, or the
         * buffer fills without finding a delimiter, it throws an error with a
         * `partial` property that contains the entire buffer.
         *
         * If `readSlice()` encounters the end of the underlying stream and there are
         * any bytes left in the buffer, the rest of the buffer is returned. In other
         * words, EOF is always treated as a delimiter. Once the buffer is empty,
         * it returns `EOF`.
         *
         * Because the data returned from `readSlice()` will be overwritten by the
         * next I/O operation, most clients should use `readString()` instead.
         */
        async readSlice(delim) {
            let s = 0; // search start index
            let slice;
            while (true) {
                // Search buffer.
                let i = this.buf.subarray(this.r + s, this.w).indexOf(delim);
                if (i >= 0) {
                    i += s;
                    slice = this.buf.subarray(this.r, this.r + i + 1);
                    this.r += i + 1;
                    break;
                }
                // EOF?
                if (this.eof) {
                    if (this.r === this.w) {
                        return exports.EOF;
                    }
                    slice = this.buf.subarray(this.r, this.w);
                    this.r = this.w;
                    break;
                }
                // Buffer full?
                if (this.buffered() >= this.buf.byteLength) {
                    this.r = this.w;
                    throw new BufferFullError(this.buf);
                }
                s = this.w - this.r; // do not rescan area we scanned before
                // Buffer is not full.
                try {
                    await this._fill();
                }
                catch (err) {
                    err.partial = slice;
                    throw err;
                }
            }
            // Handle last byte, if any.
            // const i = slice.byteLength - 1;
            // if (i >= 0) {
            //   this.lastByte = slice[i];
            //   this.lastCharSize = -1
            // }
            return slice;
        }
        /** `peek()` returns the next `n` bytes without advancing the reader. The
         * bytes stop being valid at the next read call.
         *
         * When the end of the underlying stream is reached, but there are unread
         * bytes left in the buffer, those bytes are returned. If there are no bytes
         * left in the buffer, it returns `EOF`.
         *
         * If an error is encountered before `n` bytes are available, `peek()` throws
         * an error with the `partial` property set to a slice of the buffer that
         * contains the bytes that were available before the error occurred.
         */
        async peek(n) {
            if (n < 0) {
                throw Error("negative count");
            }
            let avail = this.w - this.r;
            while (avail < n && avail < this.buf.byteLength && !this.eof) {
                try {
                    await this._fill();
                }
                catch (err) {
                    err.partial = this.buf.subarray(this.r, this.w);
                    throw err;
                }
                avail = this.w - this.r;
            }
            if (avail === 0 && this.eof) {
                return exports.EOF;
            }
            else if (avail < n && this.eof) {
                return this.buf.subarray(this.r, this.r + avail);
            }
            else if (avail < n) {
                throw new BufferFullError(this.buf.subarray(this.r, this.w));
            }
            return this.buf.subarray(this.r, this.r + n);
        }
    }
    exports.BufReader = BufReader;
    /** BufWriter implements buffering for an deno.Writer object.
     * If an error occurs writing to a Writer, no more data will be
     * accepted and all subsequent writes, and flush(), will return the error.
     * After all data has been written, the client should call the
     * flush() method to guarantee all data has been forwarded to
     * the underlying deno.Writer.
     */
    class BufWriter {
        constructor(wr, size = DEFAULT_BUF_SIZE) {
            this.wr = wr;
            this.n = 0;
            this.err = null;
            if (size <= 0) {
                size = DEFAULT_BUF_SIZE;
            }
            this.buf = new Uint8Array(size);
        }
        /** return new BufWriter unless w is BufWriter */
        static create(w, size = DEFAULT_BUF_SIZE) {
            return w instanceof BufWriter ? w : new BufWriter(w, size);
        }
        /** Size returns the size of the underlying buffer in bytes. */
        size() {
            return this.buf.byteLength;
        }
        /** Discards any unflushed buffered data, clears any error, and
         * resets b to write its output to w.
         */
        reset(w) {
            this.err = null;
            this.n = 0;
            this.wr = w;
        }
        /** Flush writes any buffered data to the underlying io.Writer. */
        async flush() {
            if (this.err !== null)
                throw this.err;
            if (this.n === 0)
                return;
            let n = 0;
            try {
                n = await this.wr.write(this.buf.subarray(0, this.n));
            }
            catch (e) {
                this.err = e;
                throw e;
            }
            if (n < this.n) {
                if (n > 0) {
                    this.buf.copyWithin(0, n, this.n);
                    this.n -= n;
                }
                this.err = new Error("Short write");
                throw this.err;
            }
            this.n = 0;
        }
        /** Returns how many bytes are unused in the buffer. */
        available() {
            return this.buf.byteLength - this.n;
        }
        /** buffered returns the number of bytes that have been written into the
         * current buffer.
         */
        buffered() {
            return this.n;
        }
        /** Writes the contents of p into the buffer.
         * Returns the number of bytes written.
         */
        async write(p) {
            if (this.err !== null)
                throw this.err;
            if (p.length === 0)
                return 0;
            let nn = 0;
            let n = 0;
            while (p.byteLength > this.available()) {
                if (this.buffered() === 0) {
                    // Large write, empty buffer.
                    // Write directly from p to avoid copy.
                    try {
                        n = await this.wr.write(p);
                    }
                    catch (e) {
                        this.err = e;
                        throw e;
                    }
                }
                else {
                    n = util_ts_1.copyBytes(this.buf, p, this.n);
                    this.n += n;
                    await this.flush();
                }
                nn += n;
                p = p.subarray(n);
            }
            n = util_ts_1.copyBytes(this.buf, p, this.n);
            this.n += n;
            nn += n;
            return nn;
        }
    }
    exports.BufWriter = BufWriter;
});
// Based on https://github.com/golang/go/blob/891682/src/net/textproto/
// Copyright 2009 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
define("https://deno.land/std/textproto/mod", ["require", "exports", "https://deno.land/std/io/bufio", "https://deno.land/std/io/util"], function (require, exports, bufio_ts_1, util_ts_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const asciiDecoder = new TextDecoder();
    function str(buf) {
        if (buf == null) {
            return "";
        }
        else {
            return asciiDecoder.decode(buf);
        }
    }
    class ProtocolError extends Error {
        constructor(msg) {
            super(msg);
            this.name = "ProtocolError";
        }
    }
    exports.ProtocolError = ProtocolError;
    function append(a, b) {
        if (a == null) {
            return b;
        }
        else {
            const output = new Uint8Array(a.length + b.length);
            output.set(a, 0);
            output.set(b, a.length);
            return output;
        }
    }
    exports.append = append;
    class TextProtoReader {
        constructor(r) {
            this.r = r;
        }
        /** readLine() reads a single line from the TextProtoReader,
         * eliding the final \n or \r\n from the returned string.
         */
        async readLine() {
            const s = await this.readLineSlice();
            if (s === bufio_ts_1.EOF)
                return bufio_ts_1.EOF;
            return str(s);
        }
        /** ReadMIMEHeader reads a MIME-style header from r.
         * The header is a sequence of possibly continued Key: Value lines
         * ending in a blank line.
         * The returned map m maps CanonicalMIMEHeaderKey(key) to a
         * sequence of values in the same order encountered in the input.
         *
         * For example, consider this input:
         *
         *	My-Key: Value 1
         *	Long-Key: Even
         *	       Longer Value
         *	My-Key: Value 2
         *
         * Given that input, ReadMIMEHeader returns the map:
         *
         *	map[string][]string{
         *		"My-Key": {"Value 1", "Value 2"},
         *		"Long-Key": {"Even Longer Value"},
         *	}
         */
        async readMIMEHeader() {
            let m = new Headers();
            let line;
            // The first line cannot start with a leading space.
            let buf = await this.r.peek(1);
            if (buf === bufio_ts_1.EOF) {
                return bufio_ts_1.EOF;
            }
            else if (buf[0] == util_ts_2.charCode(" ") || buf[0] == util_ts_2.charCode("\t")) {
                line = (await this.readLineSlice());
            }
            buf = await this.r.peek(1);
            if (buf === bufio_ts_1.EOF) {
                throw new bufio_ts_1.UnexpectedEOFError();
            }
            else if (buf[0] == util_ts_2.charCode(" ") || buf[0] == util_ts_2.charCode("\t")) {
                throw new ProtocolError(`malformed MIME header initial line: ${str(line)}`);
            }
            while (true) {
                let kv = await this.readLineSlice(); // readContinuedLineSlice
                if (kv === bufio_ts_1.EOF)
                    throw new bufio_ts_1.UnexpectedEOFError();
                if (kv.byteLength === 0)
                    return m;
                // Key ends at first colon; should not have trailing spaces
                // but they appear in the wild, violating specs, so we remove
                // them if present.
                let i = kv.indexOf(util_ts_2.charCode(":"));
                if (i < 0) {
                    throw new ProtocolError(`malformed MIME header line: ${str(kv)}`);
                }
                let endKey = i;
                while (endKey > 0 && kv[endKey - 1] == util_ts_2.charCode(" ")) {
                    endKey--;
                }
                //let key = canonicalMIMEHeaderKey(kv.subarray(0, endKey));
                let key = str(kv.subarray(0, endKey));
                // As per RFC 7230 field-name is a token,
                // tokens consist of one or more chars.
                // We could return a ProtocolError here,
                // but better to be liberal in what we
                // accept, so if we get an empty key, skip it.
                if (key == "") {
                    continue;
                }
                // Skip initial spaces in value.
                i++; // skip colon
                while (i < kv.byteLength &&
                    (kv[i] == util_ts_2.charCode(" ") || kv[i] == util_ts_2.charCode("\t"))) {
                    i++;
                }
                let value = str(kv.subarray(i));
                // In case of invalid header we swallow the error
                // example: "Audio Mode" => invalid due to space in the key
                try {
                    m.append(key, value);
                }
                catch { }
            }
        }
        async readLineSlice() {
            // this.closeDot();
            let line;
            while (true) {
                const r = await this.r.readLine();
                if (r === bufio_ts_1.EOF)
                    return bufio_ts_1.EOF;
                const { line: l, more } = r;
                // Avoid the copy if the first call produced a full line.
                if (!line && !more) {
                    // TODO(ry):
                    // This skipSpace() is definitely misplaced, but I don't know where it
                    // comes from nor how to fix it.
                    if (this.skipSpace(l) === 0) {
                        return new Uint8Array(0);
                    }
                    return l;
                }
                // @ts-ignore
                line = append(line, l);
                if (!more) {
                    break;
                }
            }
            return line;
        }
        skipSpace(l) {
            let n = 0;
            for (let i = 0; i < l.length; i++) {
                if (l[i] === util_ts_2.charCode(" ") || l[i] === util_ts_2.charCode("\t")) {
                    continue;
                }
                n++;
            }
            return n;
        }
    }
    exports.TextProtoReader = TextProtoReader;
});
define("https://deno.land/std/http/http_status", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
    var Status;
    (function (Status) {
        Status[Status["Continue"] = 100] = "Continue";
        Status[Status["SwitchingProtocols"] = 101] = "SwitchingProtocols";
        Status[Status["Processing"] = 102] = "Processing";
        Status[Status["OK"] = 200] = "OK";
        Status[Status["Created"] = 201] = "Created";
        Status[Status["Accepted"] = 202] = "Accepted";
        Status[Status["NonAuthoritativeInfo"] = 203] = "NonAuthoritativeInfo";
        Status[Status["NoContent"] = 204] = "NoContent";
        Status[Status["ResetContent"] = 205] = "ResetContent";
        Status[Status["PartialContent"] = 206] = "PartialContent";
        Status[Status["MultiStatus"] = 207] = "MultiStatus";
        Status[Status["AlreadyReported"] = 208] = "AlreadyReported";
        Status[Status["IMUsed"] = 226] = "IMUsed";
        Status[Status["MultipleChoices"] = 300] = "MultipleChoices";
        Status[Status["MovedPermanently"] = 301] = "MovedPermanently";
        Status[Status["Found"] = 302] = "Found";
        Status[Status["SeeOther"] = 303] = "SeeOther";
        Status[Status["NotModified"] = 304] = "NotModified";
        Status[Status["UseProxy"] = 305] = "UseProxy";
        // _                       = 306, // RFC 7231, 6.4.6 (Unused)
        Status[Status["TemporaryRedirect"] = 307] = "TemporaryRedirect";
        Status[Status["PermanentRedirect"] = 308] = "PermanentRedirect";
        Status[Status["BadRequest"] = 400] = "BadRequest";
        Status[Status["Unauthorized"] = 401] = "Unauthorized";
        Status[Status["PaymentRequired"] = 402] = "PaymentRequired";
        Status[Status["Forbidden"] = 403] = "Forbidden";
        Status[Status["NotFound"] = 404] = "NotFound";
        Status[Status["MethodNotAllowed"] = 405] = "MethodNotAllowed";
        Status[Status["NotAcceptable"] = 406] = "NotAcceptable";
        Status[Status["ProxyAuthRequired"] = 407] = "ProxyAuthRequired";
        Status[Status["RequestTimeout"] = 408] = "RequestTimeout";
        Status[Status["Conflict"] = 409] = "Conflict";
        Status[Status["Gone"] = 410] = "Gone";
        Status[Status["LengthRequired"] = 411] = "LengthRequired";
        Status[Status["PreconditionFailed"] = 412] = "PreconditionFailed";
        Status[Status["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
        Status[Status["RequestURITooLong"] = 414] = "RequestURITooLong";
        Status[Status["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
        Status[Status["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
        Status[Status["ExpectationFailed"] = 417] = "ExpectationFailed";
        Status[Status["Teapot"] = 418] = "Teapot";
        Status[Status["MisdirectedRequest"] = 421] = "MisdirectedRequest";
        Status[Status["UnprocessableEntity"] = 422] = "UnprocessableEntity";
        Status[Status["Locked"] = 423] = "Locked";
        Status[Status["FailedDependency"] = 424] = "FailedDependency";
        Status[Status["UpgradeRequired"] = 426] = "UpgradeRequired";
        Status[Status["PreconditionRequired"] = 428] = "PreconditionRequired";
        Status[Status["TooManyRequests"] = 429] = "TooManyRequests";
        Status[Status["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
        Status[Status["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
        Status[Status["InternalServerError"] = 500] = "InternalServerError";
        Status[Status["NotImplemented"] = 501] = "NotImplemented";
        Status[Status["BadGateway"] = 502] = "BadGateway";
        Status[Status["ServiceUnavailable"] = 503] = "ServiceUnavailable";
        Status[Status["GatewayTimeout"] = 504] = "GatewayTimeout";
        Status[Status["HTTPVersionNotSupported"] = 505] = "HTTPVersionNotSupported";
        Status[Status["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
        Status[Status["InsufficientStorage"] = 507] = "InsufficientStorage";
        Status[Status["LoopDetected"] = 508] = "LoopDetected";
        Status[Status["NotExtended"] = 510] = "NotExtended";
        Status[Status["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired"; // RFC 6585, 6
    })(Status = exports.Status || (exports.Status = {}));
    exports.STATUS_TEXT = new Map([
        [Status.Continue, "Continue"],
        [Status.SwitchingProtocols, "Switching Protocols"],
        [Status.Processing, "Processing"],
        [Status.OK, "OK"],
        [Status.Created, "Created"],
        [Status.Accepted, "Accepted"],
        [Status.NonAuthoritativeInfo, "Non-Authoritative Information"],
        [Status.NoContent, "No Content"],
        [Status.ResetContent, "Reset Content"],
        [Status.PartialContent, "Partial Content"],
        [Status.MultiStatus, "Multi-Status"],
        [Status.AlreadyReported, "Already Reported"],
        [Status.IMUsed, "IM Used"],
        [Status.MultipleChoices, "Multiple Choices"],
        [Status.MovedPermanently, "Moved Permanently"],
        [Status.Found, "Found"],
        [Status.SeeOther, "See Other"],
        [Status.NotModified, "Not Modified"],
        [Status.UseProxy, "Use Proxy"],
        [Status.TemporaryRedirect, "Temporary Redirect"],
        [Status.PermanentRedirect, "Permanent Redirect"],
        [Status.BadRequest, "Bad Request"],
        [Status.Unauthorized, "Unauthorized"],
        [Status.PaymentRequired, "Payment Required"],
        [Status.Forbidden, "Forbidden"],
        [Status.NotFound, "Not Found"],
        [Status.MethodNotAllowed, "Method Not Allowed"],
        [Status.NotAcceptable, "Not Acceptable"],
        [Status.ProxyAuthRequired, "Proxy Authentication Required"],
        [Status.RequestTimeout, "Request Timeout"],
        [Status.Conflict, "Conflict"],
        [Status.Gone, "Gone"],
        [Status.LengthRequired, "Length Required"],
        [Status.PreconditionFailed, "Precondition Failed"],
        [Status.RequestEntityTooLarge, "Request Entity Too Large"],
        [Status.RequestURITooLong, "Request URI Too Long"],
        [Status.UnsupportedMediaType, "Unsupported Media Type"],
        [Status.RequestedRangeNotSatisfiable, "Requested Range Not Satisfiable"],
        [Status.ExpectationFailed, "Expectation Failed"],
        [Status.Teapot, "I'm a teapot"],
        [Status.MisdirectedRequest, "Misdirected Request"],
        [Status.UnprocessableEntity, "Unprocessable Entity"],
        [Status.Locked, "Locked"],
        [Status.FailedDependency, "Failed Dependency"],
        [Status.UpgradeRequired, "Upgrade Required"],
        [Status.PreconditionRequired, "Precondition Required"],
        [Status.TooManyRequests, "Too Many Requests"],
        [Status.RequestHeaderFieldsTooLarge, "Request Header Fields Too Large"],
        [Status.UnavailableForLegalReasons, "Unavailable For Legal Reasons"],
        [Status.InternalServerError, "Internal Server Error"],
        [Status.NotImplemented, "Not Implemented"],
        [Status.BadGateway, "Bad Gateway"],
        [Status.ServiceUnavailable, "Service Unavailable"],
        [Status.GatewayTimeout, "Gateway Timeout"],
        [Status.HTTPVersionNotSupported, "HTTP Version Not Supported"],
        [Status.VariantAlsoNegotiates, "Variant Also Negotiates"],
        [Status.InsufficientStorage, "Insufficient Storage"],
        [Status.LoopDetected, "Loop Detected"],
        [Status.NotExtended, "Not Extended"],
        [Status.NetworkAuthenticationRequired, "Network Authentication Required"]
    ]);
});
// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
define("https://deno.land/std/util/async", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Creates a Promise with the `reject` and `resolve` functions
     * placed as methods on the promise object itself. It allows you to do:
     *
     *     const p = deferred<number>();
     *     // ...
     *     p.resolve(42);
     */
    function deferred() {
        let methods;
        const promise = new Promise((resolve, reject) => {
            methods = { resolve, reject };
        });
        return Object.assign(promise, methods);
    }
    exports.deferred = deferred;
    /** The MuxAsyncIterator class multiplexes multiple async iterators into a
     * single stream. It currently makes a few assumptions:
     * - The iterators do not throw.
     * - The final result (the value returned and not yielded from the iterator)
     *   does not matter; if there is any, it is discarded.
     */
    class MuxAsyncIterator {
        constructor() {
            this.iteratorCount = 0;
            this.yields = [];
            this.signal = deferred();
        }
        add(iterator) {
            ++this.iteratorCount;
            this.callIteratorNext(iterator);
        }
        async callIteratorNext(iterator) {
            const { value, done } = await iterator.next();
            if (done) {
                --this.iteratorCount;
            }
            else {
                this.yields.push({ iterator, value });
            }
            this.signal.resolve();
        }
        async *iterate() {
            while (this.iteratorCount > 0) {
                // Sleep until any of the wrapped iterators yields.
                await this.signal;
                // Note that while we're looping over `yields`, new items may be added.
                for (let i = 0; i < this.yields.length; i++) {
                    const { iterator, value } = this.yields[i];
                    yield value;
                    this.callIteratorNext(iterator);
                }
                // Clear the `yields` list and reset the `signal` promise.
                this.yields.length = 0;
                this.signal = deferred();
            }
        }
        [Symbol.asyncIterator]() {
            return this.iterate();
        }
    }
    exports.MuxAsyncIterator = MuxAsyncIterator;
    /** Collects all Uint8Arrays from an AsyncIterable and retuns a single
     * Uint8Array with the concatenated contents of all the collected arrays.
     */
    async function collectUint8Arrays(it) {
        const chunks = [];
        let length = 0;
        for await (const chunk of it) {
            chunks.push(chunk);
            length += chunk.length;
        }
        if (chunks.length === 1) {
            // No need to copy.
            return chunks[0];
        }
        const collected = new Uint8Array(length);
        let offset = 0;
        for (let chunk of chunks) {
            collected.set(chunk, offset);
            offset += chunk.length;
        }
        return collected;
    }
    exports.collectUint8Arrays = collectUint8Arrays;
});
define("https://deno.land/std/http/server", ["require", "exports", "https://deno.land/std/io/bufio", "https://deno.land/std/textproto/mod", "https://deno.land/std/http/http_status", "https://deno.land/std/testing/asserts", "https://deno.land/std/util/async"], function (require, exports, bufio_ts_2, mod_ts_4, http_status_ts_1, asserts_ts_3, async_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
    const { listen, copy, toAsyncIterator } = Deno;
    function bufWriter(w) {
        if (w instanceof bufio_ts_2.BufWriter) {
            return w;
        }
        else {
            return new bufio_ts_2.BufWriter(w);
        }
    }
    function setContentLength(r) {
        if (!r.headers) {
            r.headers = new Headers();
        }
        if (r.body) {
            if (!r.headers.has("content-length")) {
                if (r.body instanceof Uint8Array) {
                    const bodyLength = r.body.byteLength;
                    r.headers.append("Content-Length", bodyLength.toString());
                }
                else {
                    r.headers.append("Transfer-Encoding", "chunked");
                }
            }
        }
    }
    exports.setContentLength = setContentLength;
    async function writeChunkedBody(w, r) {
        const writer = bufWriter(w);
        const encoder = new TextEncoder();
        for await (const chunk of toAsyncIterator(r)) {
            if (chunk.byteLength <= 0)
                continue;
            const start = encoder.encode(`${chunk.byteLength.toString(16)}\r\n`);
            const end = encoder.encode("\r\n");
            await writer.write(start);
            await writer.write(chunk);
            await writer.write(end);
        }
        const endChunk = encoder.encode("0\r\n\r\n");
        await writer.write(endChunk);
    }
    async function writeResponse(w, r) {
        const protoMajor = 1;
        const protoMinor = 1;
        const statusCode = r.status || 200;
        const statusText = http_status_ts_1.STATUS_TEXT.get(statusCode);
        const writer = bufWriter(w);
        if (!statusText) {
            throw Error("bad status code");
        }
        if (!r.body) {
            r.body = new Uint8Array();
        }
        let out = `HTTP/${protoMajor}.${protoMinor} ${statusCode} ${statusText}\r\n`;
        setContentLength(r);
        const headers = r.headers;
        for (const [key, value] of headers) {
            out += `${key}: ${value}\r\n`;
        }
        out += "\r\n";
        const header = new TextEncoder().encode(out);
        const n = await writer.write(header);
        asserts_ts_3.assert(n === header.byteLength);
        if (r.body instanceof Uint8Array) {
            const n = await writer.write(r.body);
            asserts_ts_3.assert(n === r.body.byteLength);
        }
        else if (headers.has("content-length")) {
            const bodyLength = parseInt(headers.get("content-length"));
            const n = await copy(writer, r.body);
            asserts_ts_3.assert(n === bodyLength);
        }
        else {
            await writeChunkedBody(writer, r.body);
        }
        await writer.flush();
    }
    exports.writeResponse = writeResponse;
    class ServerRequest {
        constructor() {
            this.done = async_ts_1.deferred();
        }
        async *bodyStream() {
            if (this.headers.has("content-length")) {
                const len = +this.headers.get("content-length");
                if (Number.isNaN(len)) {
                    return new Uint8Array(0);
                }
                let buf = new Uint8Array(1024);
                let rr = await this.r.read(buf);
                let nread = rr.nread;
                while (!rr.eof && nread < len) {
                    yield buf.subarray(0, rr.nread);
                    buf = new Uint8Array(1024);
                    rr = await this.r.read(buf);
                    nread += rr.nread;
                }
                yield buf.subarray(0, rr.nread);
            }
            else {
                if (this.headers.has("transfer-encoding")) {
                    const transferEncodings = this.headers
                        .get("transfer-encoding")
                        .split(",")
                        .map((e) => e.trim().toLowerCase());
                    if (transferEncodings.includes("chunked")) {
                        // Based on https://tools.ietf.org/html/rfc2616#section-19.4.6
                        const tp = new mod_ts_4.TextProtoReader(this.r);
                        let line = await tp.readLine();
                        if (line === bufio_ts_2.EOF)
                            throw new bufio_ts_2.UnexpectedEOFError();
                        // TODO: handle chunk extension
                        let [chunkSizeString] = line.split(";");
                        let chunkSize = parseInt(chunkSizeString, 16);
                        if (Number.isNaN(chunkSize) || chunkSize < 0) {
                            throw new Error("Invalid chunk size");
                        }
                        while (chunkSize > 0) {
                            const data = new Uint8Array(chunkSize);
                            if ((await this.r.readFull(data)) === bufio_ts_2.EOF) {
                                throw new bufio_ts_2.UnexpectedEOFError();
                            }
                            yield data;
                            await this.r.readLine(); // Consume \r\n
                            line = await tp.readLine();
                            if (line === bufio_ts_2.EOF)
                                throw new bufio_ts_2.UnexpectedEOFError();
                            chunkSize = parseInt(line, 16);
                        }
                        const entityHeaders = await tp.readMIMEHeader();
                        if (entityHeaders !== bufio_ts_2.EOF) {
                            for (let [k, v] of entityHeaders) {
                                this.headers.set(k, v);
                            }
                        }
                        /* Pseudo code from https://tools.ietf.org/html/rfc2616#section-19.4.6
                        length := 0
                        read chunk-size, chunk-extension (if any) and CRLF
                        while (chunk-size > 0) {
                          read chunk-data and CRLF
                          append chunk-data to entity-body
                          length := length + chunk-size
                          read chunk-size and CRLF
                        }
                        read entity-header
                        while (entity-header not empty) {
                          append entity-header to existing header fields
                          read entity-header
                        }
                        Content-Length := length
                        Remove "chunked" from Transfer-Encoding
                        */
                        return; // Must return here to avoid fall through
                    }
                    // TODO: handle other transfer-encoding types
                }
                // Otherwise...
                yield new Uint8Array(0);
            }
        }
        // Read the body of the request into a single Uint8Array
        async body() {
            return async_ts_1.collectUint8Arrays(this.bodyStream());
        }
        async respond(r) {
            // Write our response!
            await writeResponse(this.w, r);
            // Signal that this request has been processed and the next pipelined
            // request on the same connection can be accepted.
            this.done.resolve();
        }
    }
    exports.ServerRequest = ServerRequest;
    function fixLength(req) {
        const contentLength = req.headers.get("Content-Length");
        if (contentLength) {
            const arrClen = contentLength.split(",");
            if (arrClen.length > 1) {
                const distinct = [...new Set(arrClen.map((e) => e.trim()))];
                if (distinct.length > 1) {
                    throw Error("cannot contain multiple Content-Length headers");
                }
                else {
                    req.headers.set("Content-Length", distinct[0]);
                }
            }
            const c = req.headers.get("Content-Length");
            if (req.method === "HEAD" && c && c !== "0") {
                throw Error("http: method cannot contain a Content-Length");
            }
            if (c && req.headers.has("transfer-encoding")) {
                // A sender MUST NOT send a Content-Length header field in any message
                // that contains a Transfer-Encoding header field.
                // rfc: https://tools.ietf.org/html/rfc7230#section-3.3.2
                throw new Error("http: Transfer-Encoding and Content-Length cannot be send together");
            }
        }
    }
    // ParseHTTPVersion parses a HTTP version string.
    // "HTTP/1.0" returns (1, 0, true).
    // Ported from https://github.com/golang/go/blob/f5c43b9/src/net/http/request.go#L766-L792
    function parseHTTPVersion(vers) {
        switch (vers) {
            case "HTTP/1.1":
                return [1, 1];
            case "HTTP/1.0":
                return [1, 0];
            default: {
                const Big = 1000000; // arbitrary upper bound
                const digitReg = /^\d+$/; // test if string is only digit
                let major;
                let minor;
                if (!vers.startsWith("HTTP/")) {
                    break;
                }
                const dot = vers.indexOf(".");
                if (dot < 0) {
                    break;
                }
                let majorStr = vers.substring(vers.indexOf("/") + 1, dot);
                major = parseInt(majorStr);
                if (!digitReg.test(majorStr) ||
                    isNaN(major) ||
                    major < 0 ||
                    major > Big) {
                    break;
                }
                let minorStr = vers.substring(dot + 1);
                minor = parseInt(minorStr);
                if (!digitReg.test(minorStr) ||
                    isNaN(minor) ||
                    minor < 0 ||
                    minor > Big) {
                    break;
                }
                return [major, minor];
            }
        }
        throw new Error(`malformed HTTP version ${vers}`);
    }
    exports.parseHTTPVersion = parseHTTPVersion;
    async function readRequest(bufr) {
        const tp = new mod_ts_4.TextProtoReader(bufr);
        const firstLine = await tp.readLine(); // e.g. GET /index.html HTTP/1.0
        if (firstLine === bufio_ts_2.EOF)
            return bufio_ts_2.EOF;
        const headers = await tp.readMIMEHeader();
        if (headers === bufio_ts_2.EOF)
            throw new bufio_ts_2.UnexpectedEOFError();
        const req = new ServerRequest();
        req.r = bufr;
        [req.method, req.url, req.proto] = firstLine.split(" ", 3);
        [req.protoMinor, req.protoMajor] = parseHTTPVersion(req.proto);
        req.headers = headers;
        fixLength(req);
        return req;
    }
    exports.readRequest = readRequest;
    class Server {
        constructor(listener) {
            this.listener = listener;
            this.closing = false;
        }
        close() {
            this.closing = true;
            this.listener.close();
        }
        // Yields all HTTP requests on a single TCP connection.
        async *iterateHttpRequests(conn) {
            const bufr = new bufio_ts_2.BufReader(conn);
            const w = new bufio_ts_2.BufWriter(conn);
            let req;
            let err;
            while (!this.closing) {
                try {
                    req = await readRequest(bufr);
                }
                catch (e) {
                    err = e;
                    break;
                }
                if (req === bufio_ts_2.EOF) {
                    break;
                }
                req.w = w;
                yield req;
                // Wait for the request to be processed before we accept a new request on
                // this connection.
                await req.done;
            }
            if (req === bufio_ts_2.EOF) {
                // The connection was gracefully closed.
            }
            else if (err) {
                // An error was thrown while parsing request headers.
                await writeResponse(req.w, {
                    status: 400,
                    body: new TextEncoder().encode(`${err.message}\r\n\r\n`)
                });
            }
            else if (this.closing) {
                // There are more requests incoming but the server is closing.
                // TODO(ry): send a back a HTTP 503 Service Unavailable status.
            }
            conn.close();
        }
        // Accepts a new TCP connection and yields all HTTP requests that arrive on
        // it. When a connection is accepted, it also creates a new iterator of the
        // same kind and adds it to the request multiplexer so that another TCP
        // connection can be accepted.
        async *acceptConnAndIterateHttpRequests(mux) {
            if (this.closing)
                return;
            // Wait for a new connection.
            const conn = await this.listener.accept();
            // Try to accept another connection and add it to the multiplexer.
            mux.add(this.acceptConnAndIterateHttpRequests(mux));
            // Yield the requests that arrive on the just-accepted connection.
            yield* this.iterateHttpRequests(conn);
        }
        [Symbol.asyncIterator]() {
            const mux = new async_ts_1.MuxAsyncIterator();
            mux.add(this.acceptConnAndIterateHttpRequests(mux));
            return mux.iterate();
        }
    }
    exports.Server = Server;
    function serve(addr) {
        const listener = listen("tcp", addr);
        return new Server(listener);
    }
    exports.serve = serve;
    async function listenAndServe(addr, handler) {
        const server = serve(addr);
        for await (const request of server) {
            handler(request);
        }
    }
    exports.listenAndServe = listenAndServe;
});
define("file:///Users/jeroen.peeters/Documents/deno-serverless-poc/helloWorld", ["require", "exports", "https://deno.land/std/http/server"], function (require, exports, server_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const port = Deno.env().PORT || 8080;
    const s = server_ts_1.serve(`:${port}`);
    async function main() {
        console.info(`Listening on port ${port}`);
        for await (const req of s) {
            console.info(`New request: ${req.url}`);
            req.respond({ body: new TextEncoder().encode("Hello World\n") });
        }
    }
    main();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkL3N0cmluZ3MvZW5jb2RlLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkL3N0cmluZ3MvZGVjb2RlLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkL3N0cmluZ3MvcGFkLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkL3N0cmluZ3MvbW9kLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkL2ZzL3BhdGgvaW50ZXJmYWNlLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkL2ZzL3BhdGgvY29uc3RhbnRzLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkL2ZzL3BhdGgvdXRpbHMudHMiLCJodHRwczovL2Rlbm8ubGFuZC9zdGQvZnMvcGF0aC93aW4zMi50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZC9mcy9wYXRoL3Bvc2l4LnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkL2ZzL3BhdGgvbW9kLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkL2ZzL3BhdGgudHMiLCJodHRwczovL2Rlbm8ubGFuZC9zdGQvaW8vdXRpbC50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZC9jb2xvcnMvbW9kLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkL3Rlc3RpbmcvZGlmZi50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZC90ZXN0aW5nL2Zvcm1hdC50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZC90ZXN0aW5nL3ByZXR0eS50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZC90ZXN0aW5nL2Fzc2VydHMudHMiLCJodHRwczovL2Rlbm8ubGFuZC9zdGQvaW8vYnVmaW8udHMiLCJodHRwczovL2Rlbm8ubGFuZC9zdGQvdGV4dHByb3RvL21vZC50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZC9odHRwL2h0dHBfc3RhdHVzLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkL3V0aWwvYXN5bmMudHMiLCJodHRwczovL2Rlbm8ubGFuZC9zdGQvaHR0cC9zZXJ2ZXIudHMiLCJmaWxlOi8vL1VzZXJzL2plcm9lbi5wZWV0ZXJzL0RvY3VtZW50cy9kZW5vLXNlcnZlcmxlc3MtcG9jL2hlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFBLHFDQUFxQztJQUN4QixRQUFBLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBRXpDLCtDQUErQztJQUMvQyxTQUFnQixNQUFNLENBQUMsS0FBYztRQUNuQyxPQUFPLGVBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUZELHdCQUVDOzs7OztJQ05ELHFDQUFxQztJQUN4QixRQUFBLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBRXpDLCtDQUErQztJQUMvQyxTQUFnQixNQUFNLENBQUMsS0FBa0I7UUFDdkMsT0FBTyxlQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFGRCx3QkFFQzs7QUNORCwwRUFBMEU7Ozs7SUFnQjFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeUJHO0lBQ0gsU0FBZ0IsR0FBRyxDQUNqQixLQUFhLEVBQ2IsTUFBYyxFQUNkLE9BQW1CO1FBQ2pCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUUsTUFBTTtRQUNaLFVBQVUsRUFBRSxFQUFFO1FBQ2QsVUFBVSxFQUFFLE9BQU87S0FDcEI7UUFFRCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDaEIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN4QixJQUFJLElBQUksR0FBRyxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ3RDLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0s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