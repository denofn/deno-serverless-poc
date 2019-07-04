var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("https://deno.land/std@v0.9.0/strings/encode", ["require", "exports"], function (require, exports) {
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
define("https://deno.land/std@v0.9.0/strings/decode", ["require", "exports"], function (require, exports) {
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
define("https://deno.land/std@v0.9.0/strings/pad", ["require", "exports"], function (require, exports) {
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
define("https://deno.land/std@v0.9.0/strings/mod", ["require", "exports", "https://deno.land/std@v0.9.0/strings/encode", "https://deno.land/std@v0.9.0/strings/decode", "https://deno.land/std@v0.9.0/strings/pad"], function (require, exports, encode_ts_1, decode_ts_1, pad_ts_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(encode_ts_1);
    __export(decode_ts_1);
    __export(pad_ts_1);
});
define("https://deno.land/std@v0.9.0/fs/path/interface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
// Copyright the Browserify authors. MIT License.
// Ported from https://github.com/browserify/path-browserify/
define("https://deno.land/std@v0.9.0/fs/path/constants", ["require", "exports"], function (require, exports) {
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
define("https://deno.land/std@v0.9.0/fs/path/utils", ["require", "exports", "https://deno.land/std@v0.9.0/fs/path/constants"], function (require, exports, constants_ts_1) {
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
define("https://deno.land/std@v0.9.0/fs/path/win32", ["require", "exports", "https://deno.land/std@v0.9.0/fs/path/constants", "https://deno.land/std@v0.9.0/fs/path/utils"], function (require, exports, constants_ts_2, utils_ts_1) {
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
define("https://deno.land/std@v0.9.0/fs/path/posix", ["require", "exports", "https://deno.land/std@v0.9.0/fs/path/constants", "https://deno.land/std@v0.9.0/fs/path/utils"], function (require, exports, constants_ts_3, utils_ts_2) {
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
define("https://deno.land/std@v0.9.0/fs/path/mod", ["require", "exports", "https://deno.land/std@v0.9.0/fs/path/win32", "https://deno.land/std@v0.9.0/fs/path/posix", "https://deno.land/std@v0.9.0/fs/path/constants"], function (require, exports, _win32, _posix, constants_ts_4) {
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
define("https://deno.land/std@v0.9.0/fs/path", ["require", "exports", "https://deno.land/std@v0.9.0/fs/path/mod"], function (require, exports, mod_ts_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    // Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
    __export(mod_ts_1);
});
define("https://deno.land/std@v0.9.0/io/util", ["require", "exports", "https://deno.land/std@v0.9.0/strings/mod", "https://deno.land/std@v0.9.0/fs/path"], function (require, exports, mod_ts_2, path) {
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
    /** Create or open a temporal file at specified directory with prefix and postfix  */
    async function tempFile(dir, opts = { prefix: "", postfix: "" }) {
        const r = Math.floor(Math.random() * 1000000);
        const filepath = path.resolve(`${dir}/${opts.prefix || ""}${r}${opts.postfix || ""}`);
        await mkdir(path.dirname(filepath), true);
        const file = await open(filepath, "a");
        return { file, filepath };
    }
    exports.tempFile = tempFile;
});
define("https://deno.land/std@v0.9.0/colors/mod", ["require", "exports"], function (require, exports) {
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
define("https://deno.land/std@v0.9.0/testing/diff", ["require", "exports"], function (require, exports) {
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
        // INFO: This buffer is used to save memory and improve performance.
        //       The first half is used to save route and last half is used to save diff type.
        //       This is because, when I kept new uint8array area to save type, performance worsened.
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
define("https://deno.land/std@v0.9.0/testing/format", ["require", "exports"], function (require, exports) {
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
    /** Is val is equal to global window object? Works even if it does not exist :) */
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
define("https://deno.land/std@v0.9.0/testing/pretty", ["require", "exports", "https://deno.land/std@v0.9.0/testing/asserts", "https://deno.land/std@v0.9.0/colors/mod", "https://deno.land/std@v0.9.0/testing/diff", "https://deno.land/std@v0.9.0/testing/format"], function (require, exports, asserts_ts_1, mod_ts_3, diff_ts_1, format_ts_1) {
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
define("https://deno.land/std@v0.9.0/testing/asserts", ["require", "exports", "https://deno.land/std@v0.9.0/testing/pretty"], function (require, exports, pretty_ts_1) {
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
define("https://deno.land/std@v0.9.0/io/bufio", ["require", "exports", "https://deno.land/std@v0.9.0/io/util", "https://deno.land/std@v0.9.0/testing/asserts"], function (require, exports, util_ts_1, asserts_ts_2) {
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
         * it returns the data read before the error and the error itself (often io.EOF).
         * ReadString returns err != nil if and only if the returned data does not end in
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
define("https://deno.land/std@v0.9.0/textproto/mod", ["require", "exports", "https://deno.land/std@v0.9.0/io/bufio", "https://deno.land/std@v0.9.0/io/util"], function (require, exports, bufio_ts_1, util_ts_2) {
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
                // As per RFC 7230 field-name is a token, tokens consist of one or more chars.
                // We could return a ProtocolError here, but better to be liberal in what we
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
define("https://deno.land/std@v0.9.0/http/http_status", ["require", "exports"], function (require, exports) {
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
define("https://deno.land/std@v0.9.0/util/async", ["require", "exports"], function (require, exports) {
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
define("https://deno.land/std@v0.9.0/http/server", ["require", "exports", "https://deno.land/std@v0.9.0/io/bufio", "https://deno.land/std@v0.9.0/textproto/mod", "https://deno.land/std@v0.9.0/http/http_status", "https://deno.land/std@v0.9.0/testing/asserts", "https://deno.land/std@v0.9.0/util/async"], function (require, exports, bufio_ts_2, mod_ts_4, http_status_ts_1, asserts_ts_3, async_ts_1) {
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
define("https://deno.land/std@v0.9.0/media_types/db_1.38.0", [], {
    "application/1d-interleaved-parityfec": {
        "source": "iana"
    },
    "application/3gpdash-qoe-report+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/3gpp-ims+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/a2l": {
        "source": "iana"
    },
    "application/activemessage": {
        "source": "iana"
    },
    "application/activity+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-costmap+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-costmapfilter+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-directory+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-endpointcost+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-endpointcostparams+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-endpointprop+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-endpointpropparams+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-error+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-networkmap+json": {
        "source": "iana",
        "compressible": true
    },
    "application/alto-networkmapfilter+json": {
        "source": "iana",
        "compressible": true
    },
    "application/aml": {
        "source": "iana"
    },
    "application/andrew-inset": {
        "source": "iana",
        "extensions": ["ez"]
    },
    "application/applefile": {
        "source": "iana"
    },
    "application/applixware": {
        "source": "apache",
        "extensions": ["aw"]
    },
    "application/atf": {
        "source": "iana"
    },
    "application/atfx": {
        "source": "iana"
    },
    "application/atom+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["atom"]
    },
    "application/atomcat+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["atomcat"]
    },
    "application/atomdeleted+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/atomicmail": {
        "source": "iana"
    },
    "application/atomsvc+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["atomsvc"]
    },
    "application/atxml": {
        "source": "iana"
    },
    "application/auth-policy+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/bacnet-xdd+zip": {
        "source": "iana",
        "compressible": false
    },
    "application/batch-smtp": {
        "source": "iana"
    },
    "application/bdoc": {
        "compressible": false,
        "extensions": ["bdoc"]
    },
    "application/beep+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/calendar+json": {
        "source": "iana",
        "compressible": true
    },
    "application/calendar+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/call-completion": {
        "source": "iana"
    },
    "application/cals-1840": {
        "source": "iana"
    },
    "application/cbor": {
        "source": "iana"
    },
    "application/cccex": {
        "source": "iana"
    },
    "application/ccmp+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/ccxml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["ccxml"]
    },
    "application/cdfx+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/cdmi-capability": {
        "source": "iana",
        "extensions": ["cdmia"]
    },
    "application/cdmi-container": {
        "source": "iana",
        "extensions": ["cdmic"]
    },
    "application/cdmi-domain": {
        "source": "iana",
        "extensions": ["cdmid"]
    },
    "application/cdmi-object": {
        "source": "iana",
        "extensions": ["cdmio"]
    },
    "application/cdmi-queue": {
        "source": "iana",
        "extensions": ["cdmiq"]
    },
    "application/cdni": {
        "source": "iana"
    },
    "application/cea": {
        "source": "iana"
    },
    "application/cea-2018+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/cellml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/cfw": {
        "source": "iana"
    },
    "application/clue_info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/cms": {
        "source": "iana"
    },
    "application/cnrp+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/coap-group+json": {
        "source": "iana",
        "compressible": true
    },
    "application/coap-payload": {
        "source": "iana"
    },
    "application/commonground": {
        "source": "iana"
    },
    "application/conference-info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/cose": {
        "source": "iana"
    },
    "application/cose-key": {
        "source": "iana"
    },
    "application/cose-key-set": {
        "source": "iana"
    },
    "application/cpl+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/csrattrs": {
        "source": "iana"
    },
    "application/csta+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/cstadata+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/csvm+json": {
        "source": "iana",
        "compressible": true
    },
    "application/cu-seeme": {
        "source": "apache",
        "extensions": ["cu"]
    },
    "application/cwt": {
        "source": "iana"
    },
    "application/cybercash": {
        "source": "iana"
    },
    "application/dart": {
        "compressible": true
    },
    "application/dash+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["mpd"]
    },
    "application/dashdelta": {
        "source": "iana"
    },
    "application/davmount+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["davmount"]
    },
    "application/dca-rft": {
        "source": "iana"
    },
    "application/dcd": {
        "source": "iana"
    },
    "application/dec-dx": {
        "source": "iana"
    },
    "application/dialog-info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/dicom": {
        "source": "iana"
    },
    "application/dicom+json": {
        "source": "iana",
        "compressible": true
    },
    "application/dicom+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/dii": {
        "source": "iana"
    },
    "application/dit": {
        "source": "iana"
    },
    "application/dns": {
        "source": "iana"
    },
    "application/dns+json": {
        "source": "iana",
        "compressible": true
    },
    "application/dns-message": {
        "source": "iana"
    },
    "application/docbook+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["dbk"]
    },
    "application/dskpp+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/dssc+der": {
        "source": "iana",
        "extensions": ["dssc"]
    },
    "application/dssc+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xdssc"]
    },
    "application/dvcs": {
        "source": "iana"
    },
    "application/ecmascript": {
        "source": "iana",
        "compressible": true,
        "extensions": ["ecma", "es"]
    },
    "application/edi-consent": {
        "source": "iana"
    },
    "application/edi-x12": {
        "source": "iana",
        "compressible": false
    },
    "application/edifact": {
        "source": "iana",
        "compressible": false
    },
    "application/efi": {
        "source": "iana"
    },
    "application/emergencycalldata.comment+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/emergencycalldata.control+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/emergencycalldata.deviceinfo+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/emergencycalldata.ecall.msd": {
        "source": "iana"
    },
    "application/emergencycalldata.providerinfo+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/emergencycalldata.serviceinfo+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/emergencycalldata.subscriberinfo+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/emergencycalldata.veds+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/emma+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["emma"]
    },
    "application/emotionml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/encaprtp": {
        "source": "iana"
    },
    "application/epp+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/epub+zip": {
        "source": "iana",
        "compressible": false,
        "extensions": ["epub"]
    },
    "application/eshop": {
        "source": "iana"
    },
    "application/exi": {
        "source": "iana",
        "extensions": ["exi"]
    },
    "application/expect-ct-report+json": {
        "source": "iana",
        "compressible": true
    },
    "application/fastinfoset": {
        "source": "iana"
    },
    "application/fastsoap": {
        "source": "iana"
    },
    "application/fdt+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/fhir+json": {
        "source": "iana",
        "compressible": true
    },
    "application/fhir+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/fido.trusted-apps+json": {
        "compressible": true
    },
    "application/fits": {
        "source": "iana"
    },
    "application/font-sfnt": {
        "source": "iana"
    },
    "application/font-tdpfr": {
        "source": "iana",
        "extensions": ["pfr"]
    },
    "application/font-woff": {
        "source": "iana",
        "compressible": false
    },
    "application/framework-attributes+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/geo+json": {
        "source": "iana",
        "compressible": true,
        "extensions": ["geojson"]
    },
    "application/geo+json-seq": {
        "source": "iana"
    },
    "application/geopackage+sqlite3": {
        "source": "iana"
    },
    "application/geoxacml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/gltf-buffer": {
        "source": "iana"
    },
    "application/gml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["gml"]
    },
    "application/gpx+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["gpx"]
    },
    "application/gxf": {
        "source": "apache",
        "extensions": ["gxf"]
    },
    "application/gzip": {
        "source": "iana",
        "compressible": false,
        "extensions": ["gz"]
    },
    "application/h224": {
        "source": "iana"
    },
    "application/held+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/hjson": {
        "extensions": ["hjson"]
    },
    "application/http": {
        "source": "iana"
    },
    "application/hyperstudio": {
        "source": "iana",
        "extensions": ["stk"]
    },
    "application/ibe-key-request+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/ibe-pkg-reply+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/ibe-pp-data": {
        "source": "iana"
    },
    "application/iges": {
        "source": "iana"
    },
    "application/im-iscomposing+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/index": {
        "source": "iana"
    },
    "application/index.cmd": {
        "source": "iana"
    },
    "application/index.obj": {
        "source": "iana"
    },
    "application/index.response": {
        "source": "iana"
    },
    "application/index.vnd": {
        "source": "iana"
    },
    "application/inkml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["ink", "inkml"]
    },
    "application/iotp": {
        "source": "iana"
    },
    "application/ipfix": {
        "source": "iana",
        "extensions": ["ipfix"]
    },
    "application/ipp": {
        "source": "iana"
    },
    "application/isup": {
        "source": "iana"
    },
    "application/its+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/java-archive": {
        "source": "apache",
        "compressible": false,
        "extensions": ["jar", "war", "ear"]
    },
    "application/java-serialized-object": {
        "source": "apache",
        "compressible": false,
        "extensions": ["ser"]
    },
    "application/java-vm": {
        "source": "apache",
        "compressible": false,
        "extensions": ["class"]
    },
    "application/javascript": {
        "source": "iana",
        "charset": "UTF-8",
        "compressible": true,
        "extensions": ["js", "mjs"]
    },
    "application/jf2feed+json": {
        "source": "iana",
        "compressible": true
    },
    "application/jose": {
        "source": "iana"
    },
    "application/jose+json": {
        "source": "iana",
        "compressible": true
    },
    "application/jrd+json": {
        "source": "iana",
        "compressible": true
    },
    "application/json": {
        "source": "iana",
        "charset": "UTF-8",
        "compressible": true,
        "extensions": ["json", "map"]
    },
    "application/json-patch+json": {
        "source": "iana",
        "compressible": true
    },
    "application/json-seq": {
        "source": "iana"
    },
    "application/json5": {
        "extensions": ["json5"]
    },
    "application/jsonml+json": {
        "source": "apache",
        "compressible": true,
        "extensions": ["jsonml"]
    },
    "application/jwk+json": {
        "source": "iana",
        "compressible": true
    },
    "application/jwk-set+json": {
        "source": "iana",
        "compressible": true
    },
    "application/jwt": {
        "source": "iana"
    },
    "application/kpml-request+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/kpml-response+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/ld+json": {
        "source": "iana",
        "compressible": true,
        "extensions": ["jsonld"]
    },
    "application/lgr+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/link-format": {
        "source": "iana"
    },
    "application/load-control+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/lost+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["lostxml"]
    },
    "application/lostsync+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/lxf": {
        "source": "iana"
    },
    "application/mac-binhex40": {
        "source": "iana",
        "extensions": ["hqx"]
    },
    "application/mac-compactpro": {
        "source": "apache",
        "extensions": ["cpt"]
    },
    "application/macwriteii": {
        "source": "iana"
    },
    "application/mads+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["mads"]
    },
    "application/manifest+json": {
        "charset": "UTF-8",
        "compressible": true,
        "extensions": ["webmanifest"]
    },
    "application/marc": {
        "source": "iana",
        "extensions": ["mrc"]
    },
    "application/marcxml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["mrcx"]
    },
    "application/mathematica": {
        "source": "iana",
        "extensions": ["ma", "nb", "mb"]
    },
    "application/mathml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["mathml"]
    },
    "application/mathml-content+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mathml-presentation+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mbms-associated-procedure-description+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mbms-deregister+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mbms-envelope+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mbms-msk+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mbms-msk-response+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mbms-protection-description+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mbms-reception-report+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mbms-register+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mbms-register-response+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mbms-schedule+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mbms-user-service-description+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mbox": {
        "source": "iana",
        "extensions": ["mbox"]
    },
    "application/media-policy-dataset+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/media_control+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mediaservercontrol+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["mscml"]
    },
    "application/merge-patch+json": {
        "source": "iana",
        "compressible": true
    },
    "application/metalink+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["metalink"]
    },
    "application/metalink4+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["meta4"]
    },
    "application/mets+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["mets"]
    },
    "application/mf4": {
        "source": "iana"
    },
    "application/mikey": {
        "source": "iana"
    },
    "application/mmt-usd+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mods+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["mods"]
    },
    "application/moss-keys": {
        "source": "iana"
    },
    "application/moss-signature": {
        "source": "iana"
    },
    "application/mosskey-data": {
        "source": "iana"
    },
    "application/mosskey-request": {
        "source": "iana"
    },
    "application/mp21": {
        "source": "iana",
        "extensions": ["m21", "mp21"]
    },
    "application/mp4": {
        "source": "iana",
        "extensions": ["mp4s", "m4p"]
    },
    "application/mpeg4-generic": {
        "source": "iana"
    },
    "application/mpeg4-iod": {
        "source": "iana"
    },
    "application/mpeg4-iod-xmt": {
        "source": "iana"
    },
    "application/mrb-consumer+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/mrb-publish+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/msc-ivr+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/msc-mixer+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/msword": {
        "source": "iana",
        "compressible": false,
        "extensions": ["doc", "dot"]
    },
    "application/mud+json": {
        "source": "iana",
        "compressible": true
    },
    "application/mxf": {
        "source": "iana",
        "extensions": ["mxf"]
    },
    "application/n-quads": {
        "source": "iana",
        "extensions": ["nq"]
    },
    "application/n-triples": {
        "source": "iana",
        "extensions": ["nt"]
    },
    "application/nasdata": {
        "source": "iana"
    },
    "application/news-checkgroups": {
        "source": "iana"
    },
    "application/news-groupinfo": {
        "source": "iana"
    },
    "application/news-transmission": {
        "source": "iana"
    },
    "application/nlsml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/node": {
        "source": "iana"
    },
    "application/nss": {
        "source": "iana"
    },
    "application/ocsp-request": {
        "source": "iana"
    },
    "application/ocsp-response": {
        "source": "iana"
    },
    "application/octet-stream": {
        "source": "iana",
        "compressible": false,
        "extensions": [
            "bin",
            "dms",
            "lrf",
            "mar",
            "so",
            "dist",
            "distz",
            "pkg",
            "bpk",
            "dump",
            "elc",
            "deploy",
            "exe",
            "dll",
            "deb",
            "dmg",
            "iso",
            "img",
            "msi",
            "msp",
            "msm",
            "buffer"
        ]
    },
    "application/oda": {
        "source": "iana",
        "extensions": ["oda"]
    },
    "application/odm+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/odx": {
        "source": "iana"
    },
    "application/oebps-package+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["opf"]
    },
    "application/ogg": {
        "source": "iana",
        "compressible": false,
        "extensions": ["ogx"]
    },
    "application/omdoc+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["omdoc"]
    },
    "application/onenote": {
        "source": "apache",
        "extensions": ["onetoc", "onetoc2", "onetmp", "onepkg"]
    },
    "application/oxps": {
        "source": "iana",
        "extensions": ["oxps"]
    },
    "application/p2p-overlay+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/parityfec": {
        "source": "iana"
    },
    "application/passport": {
        "source": "iana"
    },
    "application/patch-ops-error+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xer"]
    },
    "application/pdf": {
        "source": "iana",
        "compressible": false,
        "extensions": ["pdf"]
    },
    "application/pdx": {
        "source": "iana"
    },
    "application/pem-certificate-chain": {
        "source": "iana"
    },
    "application/pgp-encrypted": {
        "source": "iana",
        "compressible": false,
        "extensions": ["pgp"]
    },
    "application/pgp-keys": {
        "source": "iana"
    },
    "application/pgp-signature": {
        "source": "iana",
        "extensions": ["asc", "sig"]
    },
    "application/pics-rules": {
        "source": "apache",
        "extensions": ["prf"]
    },
    "application/pidf+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/pidf-diff+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/pkcs10": {
        "source": "iana",
        "extensions": ["p10"]
    },
    "application/pkcs12": {
        "source": "iana"
    },
    "application/pkcs7-mime": {
        "source": "iana",
        "extensions": ["p7m", "p7c"]
    },
    "application/pkcs7-signature": {
        "source": "iana",
        "extensions": ["p7s"]
    },
    "application/pkcs8": {
        "source": "iana",
        "extensions": ["p8"]
    },
    "application/pkcs8-encrypted": {
        "source": "iana"
    },
    "application/pkix-attr-cert": {
        "source": "iana",
        "extensions": ["ac"]
    },
    "application/pkix-cert": {
        "source": "iana",
        "extensions": ["cer"]
    },
    "application/pkix-crl": {
        "source": "iana",
        "extensions": ["crl"]
    },
    "application/pkix-pkipath": {
        "source": "iana",
        "extensions": ["pkipath"]
    },
    "application/pkixcmp": {
        "source": "iana",
        "extensions": ["pki"]
    },
    "application/pls+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["pls"]
    },
    "application/poc-settings+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/postscript": {
        "source": "iana",
        "compressible": true,
        "extensions": ["ai", "eps", "ps"]
    },
    "application/ppsp-tracker+json": {
        "source": "iana",
        "compressible": true
    },
    "application/problem+json": {
        "source": "iana",
        "compressible": true
    },
    "application/problem+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/provenance+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/prs.alvestrand.titrax-sheet": {
        "source": "iana"
    },
    "application/prs.cww": {
        "source": "iana",
        "extensions": ["cww"]
    },
    "application/prs.hpub+zip": {
        "source": "iana",
        "compressible": false
    },
    "application/prs.nprend": {
        "source": "iana"
    },
    "application/prs.plucker": {
        "source": "iana"
    },
    "application/prs.rdf-xml-crypt": {
        "source": "iana"
    },
    "application/prs.xsf+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/pskc+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["pskcxml"]
    },
    "application/qsig": {
        "source": "iana"
    },
    "application/raml+yaml": {
        "compressible": true,
        "extensions": ["raml"]
    },
    "application/raptorfec": {
        "source": "iana"
    },
    "application/rdap+json": {
        "source": "iana",
        "compressible": true
    },
    "application/rdf+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["rdf", "owl"]
    },
    "application/reginfo+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["rif"]
    },
    "application/relax-ng-compact-syntax": {
        "source": "iana",
        "extensions": ["rnc"]
    },
    "application/remote-printing": {
        "source": "iana"
    },
    "application/reputon+json": {
        "source": "iana",
        "compressible": true
    },
    "application/resource-lists+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["rl"]
    },
    "application/resource-lists-diff+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["rld"]
    },
    "application/rfc+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/riscos": {
        "source": "iana"
    },
    "application/rlmi+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/rls-services+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["rs"]
    },
    "application/route-apd+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/route-s-tsid+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/route-usd+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/rpki-ghostbusters": {
        "source": "iana",
        "extensions": ["gbr"]
    },
    "application/rpki-manifest": {
        "source": "iana",
        "extensions": ["mft"]
    },
    "application/rpki-publication": {
        "source": "iana"
    },
    "application/rpki-roa": {
        "source": "iana",
        "extensions": ["roa"]
    },
    "application/rpki-updown": {
        "source": "iana"
    },
    "application/rsd+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["rsd"]
    },
    "application/rss+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["rss"]
    },
    "application/rtf": {
        "source": "iana",
        "compressible": true,
        "extensions": ["rtf"]
    },
    "application/rtploopback": {
        "source": "iana"
    },
    "application/rtx": {
        "source": "iana"
    },
    "application/samlassertion+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/samlmetadata+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/sbml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["sbml"]
    },
    "application/scaip+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/scim+json": {
        "source": "iana",
        "compressible": true
    },
    "application/scvp-cv-request": {
        "source": "iana",
        "extensions": ["scq"]
    },
    "application/scvp-cv-response": {
        "source": "iana",
        "extensions": ["scs"]
    },
    "application/scvp-vp-request": {
        "source": "iana",
        "extensions": ["spq"]
    },
    "application/scvp-vp-response": {
        "source": "iana",
        "extensions": ["spp"]
    },
    "application/sdp": {
        "source": "iana",
        "extensions": ["sdp"]
    },
    "application/secevent+jwt": {
        "source": "iana"
    },
    "application/senml+cbor": {
        "source": "iana"
    },
    "application/senml+json": {
        "source": "iana",
        "compressible": true
    },
    "application/senml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/senml-exi": {
        "source": "iana"
    },
    "application/sensml+cbor": {
        "source": "iana"
    },
    "application/sensml+json": {
        "source": "iana",
        "compressible": true
    },
    "application/sensml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/sensml-exi": {
        "source": "iana"
    },
    "application/sep+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/sep-exi": {
        "source": "iana"
    },
    "application/session-info": {
        "source": "iana"
    },
    "application/set-payment": {
        "source": "iana"
    },
    "application/set-payment-initiation": {
        "source": "iana",
        "extensions": ["setpay"]
    },
    "application/set-registration": {
        "source": "iana"
    },
    "application/set-registration-initiation": {
        "source": "iana",
        "extensions": ["setreg"]
    },
    "application/sgml": {
        "source": "iana"
    },
    "application/sgml-open-catalog": {
        "source": "iana"
    },
    "application/shf+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["shf"]
    },
    "application/sieve": {
        "source": "iana"
    },
    "application/simple-filter+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/simple-message-summary": {
        "source": "iana"
    },
    "application/simplesymbolcontainer": {
        "source": "iana"
    },
    "application/slate": {
        "source": "iana"
    },
    "application/smil": {
        "source": "iana"
    },
    "application/smil+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["smi", "smil"]
    },
    "application/smpte336m": {
        "source": "iana"
    },
    "application/soap+fastinfoset": {
        "source": "iana"
    },
    "application/soap+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/sparql-query": {
        "source": "iana",
        "extensions": ["rq"]
    },
    "application/sparql-results+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["srx"]
    },
    "application/spirits-event+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/sql": {
        "source": "iana"
    },
    "application/srgs": {
        "source": "iana",
        "extensions": ["gram"]
    },
    "application/srgs+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["grxml"]
    },
    "application/sru+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["sru"]
    },
    "application/ssdl+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["ssdl"]
    },
    "application/ssml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["ssml"]
    },
    "application/stix+json": {
        "source": "iana",
        "compressible": true
    },
    "application/tamp-apex-update": {
        "source": "iana"
    },
    "application/tamp-apex-update-confirm": {
        "source": "iana"
    },
    "application/tamp-community-update": {
        "source": "iana"
    },
    "application/tamp-community-update-confirm": {
        "source": "iana"
    },
    "application/tamp-error": {
        "source": "iana"
    },
    "application/tamp-sequence-adjust": {
        "source": "iana"
    },
    "application/tamp-sequence-adjust-confirm": {
        "source": "iana"
    },
    "application/tamp-status-query": {
        "source": "iana"
    },
    "application/tamp-status-response": {
        "source": "iana"
    },
    "application/tamp-update": {
        "source": "iana"
    },
    "application/tamp-update-confirm": {
        "source": "iana"
    },
    "application/tar": {
        "compressible": true
    },
    "application/taxii+json": {
        "source": "iana",
        "compressible": true
    },
    "application/tei+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["tei", "teicorpus"]
    },
    "application/tetra_isi": {
        "source": "iana"
    },
    "application/thraud+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["tfi"]
    },
    "application/timestamp-query": {
        "source": "iana"
    },
    "application/timestamp-reply": {
        "source": "iana"
    },
    "application/timestamped-data": {
        "source": "iana",
        "extensions": ["tsd"]
    },
    "application/tlsrpt+gzip": {
        "source": "iana"
    },
    "application/tlsrpt+json": {
        "source": "iana",
        "compressible": true
    },
    "application/tnauthlist": {
        "source": "iana"
    },
    "application/trickle-ice-sdpfrag": {
        "source": "iana"
    },
    "application/trig": {
        "source": "iana"
    },
    "application/ttml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/tve-trigger": {
        "source": "iana"
    },
    "application/tzif": {
        "source": "iana"
    },
    "application/tzif-leap": {
        "source": "iana"
    },
    "application/ulpfec": {
        "source": "iana"
    },
    "application/urc-grpsheet+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/urc-ressheet+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/urc-targetdesc+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/urc-uisocketdesc+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vcard+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vcard+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vemmi": {
        "source": "iana"
    },
    "application/vividence.scriptfile": {
        "source": "apache"
    },
    "application/vnd.1000minds.decision-model+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp-prose+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp-prose-pc3ch+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp-v2x-local-service-information": {
        "source": "iana"
    },
    "application/vnd.3gpp.access-transfer-events+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.bsf+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.gmop+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mc-signalling-ear": {
        "source": "iana"
    },
    "application/vnd.3gpp.mcdata-affiliation-command+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcdata-info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcdata-payload": {
        "source": "iana"
    },
    "application/vnd.3gpp.mcdata-service-config+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcdata-signalling": {
        "source": "iana"
    },
    "application/vnd.3gpp.mcdata-ue-config+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcdata-user-profile+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcptt-affiliation-command+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcptt-floor-request+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcptt-info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcptt-location-info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcptt-service-config+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcptt-signed+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcptt-ue-config+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcptt-ue-init-config+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcptt-user-profile+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcvideo-location-info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcvideo-service-config+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcvideo-transmission-request+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcvideo-ue-config+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mcvideo-user-profile+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.mid-call+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.pic-bw-large": {
        "source": "iana",
        "extensions": ["plb"]
    },
    "application/vnd.3gpp.pic-bw-small": {
        "source": "iana",
        "extensions": ["psb"]
    },
    "application/vnd.3gpp.pic-bw-var": {
        "source": "iana",
        "extensions": ["pvb"]
    },
    "application/vnd.3gpp.sms": {
        "source": "iana"
    },
    "application/vnd.3gpp.sms+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.srvcc-ext+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.srvcc-info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.state-and-event-info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp.ussd+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp2.bcmcsinfo+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.3gpp2.sms": {
        "source": "iana"
    },
    "application/vnd.3gpp2.tcap": {
        "source": "iana",
        "extensions": ["tcap"]
    },
    "application/vnd.3lightssoftware.imagescal": {
        "source": "iana"
    },
    "application/vnd.3m.post-it-notes": {
        "source": "iana",
        "extensions": ["pwn"]
    },
    "application/vnd.accpac.simply.aso": {
        "source": "iana",
        "extensions": ["aso"]
    },
    "application/vnd.accpac.simply.imp": {
        "source": "iana",
        "extensions": ["imp"]
    },
    "application/vnd.acucobol": {
        "source": "iana",
        "extensions": ["acu"]
    },
    "application/vnd.acucorp": {
        "source": "iana",
        "extensions": ["atc", "acutc"]
    },
    "application/vnd.adobe.air-application-installer-package+zip": {
        "source": "apache",
        "compressible": false,
        "extensions": ["air"]
    },
    "application/vnd.adobe.flash.movie": {
        "source": "iana"
    },
    "application/vnd.adobe.formscentral.fcdt": {
        "source": "iana",
        "extensions": ["fcdt"]
    },
    "application/vnd.adobe.fxp": {
        "source": "iana",
        "extensions": ["fxp", "fxpl"]
    },
    "application/vnd.adobe.partial-upload": {
        "source": "iana"
    },
    "application/vnd.adobe.xdp+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xdp"]
    },
    "application/vnd.adobe.xfdf": {
        "source": "iana",
        "extensions": ["xfdf"]
    },
    "application/vnd.aether.imp": {
        "source": "iana"
    },
    "application/vnd.afpc.afplinedata": {
        "source": "iana"
    },
    "application/vnd.afpc.modca": {
        "source": "iana"
    },
    "application/vnd.ah-barcode": {
        "source": "iana"
    },
    "application/vnd.ahead.space": {
        "source": "iana",
        "extensions": ["ahead"]
    },
    "application/vnd.airzip.filesecure.azf": {
        "source": "iana",
        "extensions": ["azf"]
    },
    "application/vnd.airzip.filesecure.azs": {
        "source": "iana",
        "extensions": ["azs"]
    },
    "application/vnd.amadeus+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.amazon.ebook": {
        "source": "apache",
        "extensions": ["azw"]
    },
    "application/vnd.amazon.mobi8-ebook": {
        "source": "iana"
    },
    "application/vnd.americandynamics.acc": {
        "source": "iana",
        "extensions": ["acc"]
    },
    "application/vnd.amiga.ami": {
        "source": "iana",
        "extensions": ["ami"]
    },
    "application/vnd.amundsen.maze+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.android.package-archive": {
        "source": "apache",
        "compressible": false,
        "extensions": ["apk"]
    },
    "application/vnd.anki": {
        "source": "iana"
    },
    "application/vnd.anser-web-certificate-issue-initiation": {
        "source": "iana",
        "extensions": ["cii"]
    },
    "application/vnd.anser-web-funds-transfer-initiation": {
        "source": "apache",
        "extensions": ["fti"]
    },
    "application/vnd.antix.game-component": {
        "source": "iana",
        "extensions": ["atx"]
    },
    "application/vnd.apache.thrift.binary": {
        "source": "iana"
    },
    "application/vnd.apache.thrift.compact": {
        "source": "iana"
    },
    "application/vnd.apache.thrift.json": {
        "source": "iana"
    },
    "application/vnd.api+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.apothekende.reservation+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.apple.installer+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["mpkg"]
    },
    "application/vnd.apple.keynote": {
        "source": "iana",
        "extensions": ["keynote"]
    },
    "application/vnd.apple.mpegurl": {
        "source": "iana",
        "extensions": ["m3u8"]
    },
    "application/vnd.apple.numbers": {
        "source": "iana",
        "extensions": ["numbers"]
    },
    "application/vnd.apple.pages": {
        "source": "iana",
        "extensions": ["pages"]
    },
    "application/vnd.apple.pkpass": {
        "compressible": false,
        "extensions": ["pkpass"]
    },
    "application/vnd.arastra.swi": {
        "source": "iana"
    },
    "application/vnd.aristanetworks.swi": {
        "source": "iana",
        "extensions": ["swi"]
    },
    "application/vnd.artisan+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.artsquare": {
        "source": "iana"
    },
    "application/vnd.astraea-software.iota": {
        "source": "iana",
        "extensions": ["iota"]
    },
    "application/vnd.audiograph": {
        "source": "iana",
        "extensions": ["aep"]
    },
    "application/vnd.autopackage": {
        "source": "iana"
    },
    "application/vnd.avalon+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.avistar+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.balsamiq.bmml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.balsamiq.bmpr": {
        "source": "iana"
    },
    "application/vnd.banana-accounting": {
        "source": "iana"
    },
    "application/vnd.bbf.usp.msg": {
        "source": "iana"
    },
    "application/vnd.bbf.usp.msg+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.bekitzur-stech+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.bint.med-content": {
        "source": "iana"
    },
    "application/vnd.biopax.rdf+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.blink-idb-value-wrapper": {
        "source": "iana"
    },
    "application/vnd.blueice.multipass": {
        "source": "iana",
        "extensions": ["mpm"]
    },
    "application/vnd.bluetooth.ep.oob": {
        "source": "iana"
    },
    "application/vnd.bluetooth.le.oob": {
        "source": "iana"
    },
    "application/vnd.bmi": {
        "source": "iana",
        "extensions": ["bmi"]
    },
    "application/vnd.businessobjects": {
        "source": "iana",
        "extensions": ["rep"]
    },
    "application/vnd.byu.uapi+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.cab-jscript": {
        "source": "iana"
    },
    "application/vnd.canon-cpdl": {
        "source": "iana"
    },
    "application/vnd.canon-lips": {
        "source": "iana"
    },
    "application/vnd.capasystems-pg+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.cendio.thinlinc.clientconf": {
        "source": "iana"
    },
    "application/vnd.century-systems.tcp_stream": {
        "source": "iana"
    },
    "application/vnd.chemdraw+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["cdxml"]
    },
    "application/vnd.chess-pgn": {
        "source": "iana"
    },
    "application/vnd.chipnuts.karaoke-mmd": {
        "source": "iana",
        "extensions": ["mmd"]
    },
    "application/vnd.cinderella": {
        "source": "iana",
        "extensions": ["cdy"]
    },
    "application/vnd.cirpack.isdn-ext": {
        "source": "iana"
    },
    "application/vnd.citationstyles.style+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["csl"]
    },
    "application/vnd.claymore": {
        "source": "iana",
        "extensions": ["cla"]
    },
    "application/vnd.cloanto.rp9": {
        "source": "iana",
        "extensions": ["rp9"]
    },
    "application/vnd.clonk.c4group": {
        "source": "iana",
        "extensions": ["c4g", "c4d", "c4f", "c4p", "c4u"]
    },
    "application/vnd.cluetrust.cartomobile-config": {
        "source": "iana",
        "extensions": ["c11amc"]
    },
    "application/vnd.cluetrust.cartomobile-config-pkg": {
        "source": "iana",
        "extensions": ["c11amz"]
    },
    "application/vnd.coffeescript": {
        "source": "iana"
    },
    "application/vnd.collabio.xodocuments.document": {
        "source": "iana"
    },
    "application/vnd.collabio.xodocuments.document-template": {
        "source": "iana"
    },
    "application/vnd.collabio.xodocuments.presentation": {
        "source": "iana"
    },
    "application/vnd.collabio.xodocuments.presentation-template": {
        "source": "iana"
    },
    "application/vnd.collabio.xodocuments.spreadsheet": {
        "source": "iana"
    },
    "application/vnd.collabio.xodocuments.spreadsheet-template": {
        "source": "iana"
    },
    "application/vnd.collection+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.collection.doc+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.collection.next+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.comicbook+zip": {
        "source": "iana",
        "compressible": false
    },
    "application/vnd.comicbook-rar": {
        "source": "iana"
    },
    "application/vnd.commerce-battelle": {
        "source": "iana"
    },
    "application/vnd.commonspace": {
        "source": "iana",
        "extensions": ["csp"]
    },
    "application/vnd.contact.cmsg": {
        "source": "iana",
        "extensions": ["cdbcmsg"]
    },
    "application/vnd.coreos.ignition+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.cosmocaller": {
        "source": "iana",
        "extensions": ["cmc"]
    },
    "application/vnd.crick.clicker": {
        "source": "iana",
        "extensions": ["clkx"]
    },
    "application/vnd.crick.clicker.keyboard": {
        "source": "iana",
        "extensions": ["clkk"]
    },
    "application/vnd.crick.clicker.palette": {
        "source": "iana",
        "extensions": ["clkp"]
    },
    "application/vnd.crick.clicker.template": {
        "source": "iana",
        "extensions": ["clkt"]
    },
    "application/vnd.crick.clicker.wordbank": {
        "source": "iana",
        "extensions": ["clkw"]
    },
    "application/vnd.criticaltools.wbs+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["wbs"]
    },
    "application/vnd.ctc-posml": {
        "source": "iana",
        "extensions": ["pml"]
    },
    "application/vnd.ctct.ws+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.cups-pdf": {
        "source": "iana"
    },
    "application/vnd.cups-postscript": {
        "source": "iana"
    },
    "application/vnd.cups-ppd": {
        "source": "iana",
        "extensions": ["ppd"]
    },
    "application/vnd.cups-raster": {
        "source": "iana"
    },
    "application/vnd.cups-raw": {
        "source": "iana"
    },
    "application/vnd.curl": {
        "source": "iana"
    },
    "application/vnd.curl.car": {
        "source": "apache",
        "extensions": ["car"]
    },
    "application/vnd.curl.pcurl": {
        "source": "apache",
        "extensions": ["pcurl"]
    },
    "application/vnd.cyan.dean.root+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.cybank": {
        "source": "iana"
    },
    "application/vnd.d2l.coursepackage1p0+zip": {
        "source": "iana",
        "compressible": false
    },
    "application/vnd.dart": {
        "source": "iana",
        "compressible": true,
        "extensions": ["dart"]
    },
    "application/vnd.data-vision.rdz": {
        "source": "iana",
        "extensions": ["rdz"]
    },
    "application/vnd.datapackage+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.dataresource+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.debian.binary-package": {
        "source": "iana"
    },
    "application/vnd.dece.data": {
        "source": "iana",
        "extensions": ["uvf", "uvvf", "uvd", "uvvd"]
    },
    "application/vnd.dece.ttml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["uvt", "uvvt"]
    },
    "application/vnd.dece.unspecified": {
        "source": "iana",
        "extensions": ["uvx", "uvvx"]
    },
    "application/vnd.dece.zip": {
        "source": "iana",
        "extensions": ["uvz", "uvvz"]
    },
    "application/vnd.denovo.fcselayout-link": {
        "source": "iana",
        "extensions": ["fe_launch"]
    },
    "application/vnd.desmume.movie": {
        "source": "iana"
    },
    "application/vnd.dir-bi.plate-dl-nosuffix": {
        "source": "iana"
    },
    "application/vnd.dm.delegation+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.dna": {
        "source": "iana",
        "extensions": ["dna"]
    },
    "application/vnd.document+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.dolby.mlp": {
        "source": "apache",
        "extensions": ["mlp"]
    },
    "application/vnd.dolby.mobile.1": {
        "source": "iana"
    },
    "application/vnd.dolby.mobile.2": {
        "source": "iana"
    },
    "application/vnd.doremir.scorecloud-binary-document": {
        "source": "iana"
    },
    "application/vnd.dpgraph": {
        "source": "iana",
        "extensions": ["dpg"]
    },
    "application/vnd.dreamfactory": {
        "source": "iana",
        "extensions": ["dfac"]
    },
    "application/vnd.drive+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ds-keypoint": {
        "source": "apache",
        "extensions": ["kpxx"]
    },
    "application/vnd.dtg.local": {
        "source": "iana"
    },
    "application/vnd.dtg.local.flash": {
        "source": "iana"
    },
    "application/vnd.dtg.local.html": {
        "source": "iana"
    },
    "application/vnd.dvb.ait": {
        "source": "iana",
        "extensions": ["ait"]
    },
    "application/vnd.dvb.dvbj": {
        "source": "iana"
    },
    "application/vnd.dvb.esgcontainer": {
        "source": "iana"
    },
    "application/vnd.dvb.ipdcdftnotifaccess": {
        "source": "iana"
    },
    "application/vnd.dvb.ipdcesgaccess": {
        "source": "iana"
    },
    "application/vnd.dvb.ipdcesgaccess2": {
        "source": "iana"
    },
    "application/vnd.dvb.ipdcesgpdd": {
        "source": "iana"
    },
    "application/vnd.dvb.ipdcroaming": {
        "source": "iana"
    },
    "application/vnd.dvb.iptv.alfec-base": {
        "source": "iana"
    },
    "application/vnd.dvb.iptv.alfec-enhancement": {
        "source": "iana"
    },
    "application/vnd.dvb.notif-aggregate-root+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.dvb.notif-container+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.dvb.notif-generic+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.dvb.notif-ia-msglist+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.dvb.notif-ia-registration-request+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.dvb.notif-ia-registration-response+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.dvb.notif-init+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.dvb.pfr": {
        "source": "iana"
    },
    "application/vnd.dvb.service": {
        "source": "iana",
        "extensions": ["svc"]
    },
    "application/vnd.dxr": {
        "source": "iana"
    },
    "application/vnd.dynageo": {
        "source": "iana",
        "extensions": ["geo"]
    },
    "application/vnd.dzr": {
        "source": "iana"
    },
    "application/vnd.easykaraoke.cdgdownload": {
        "source": "iana"
    },
    "application/vnd.ecdis-update": {
        "source": "iana"
    },
    "application/vnd.ecip.rlp": {
        "source": "iana"
    },
    "application/vnd.ecowin.chart": {
        "source": "iana",
        "extensions": ["mag"]
    },
    "application/vnd.ecowin.filerequest": {
        "source": "iana"
    },
    "application/vnd.ecowin.fileupdate": {
        "source": "iana"
    },
    "application/vnd.ecowin.series": {
        "source": "iana"
    },
    "application/vnd.ecowin.seriesrequest": {
        "source": "iana"
    },
    "application/vnd.ecowin.seriesupdate": {
        "source": "iana"
    },
    "application/vnd.efi.img": {
        "source": "iana"
    },
    "application/vnd.efi.iso": {
        "source": "iana"
    },
    "application/vnd.emclient.accessrequest+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.enliven": {
        "source": "iana",
        "extensions": ["nml"]
    },
    "application/vnd.enphase.envoy": {
        "source": "iana"
    },
    "application/vnd.eprints.data+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.epson.esf": {
        "source": "iana",
        "extensions": ["esf"]
    },
    "application/vnd.epson.msf": {
        "source": "iana",
        "extensions": ["msf"]
    },
    "application/vnd.epson.quickanime": {
        "source": "iana",
        "extensions": ["qam"]
    },
    "application/vnd.epson.salt": {
        "source": "iana",
        "extensions": ["slt"]
    },
    "application/vnd.epson.ssf": {
        "source": "iana",
        "extensions": ["ssf"]
    },
    "application/vnd.ericsson.quickcall": {
        "source": "iana"
    },
    "application/vnd.espass-espass+zip": {
        "source": "iana",
        "compressible": false
    },
    "application/vnd.eszigno3+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["es3", "et3"]
    },
    "application/vnd.etsi.aoc+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.asic-e+zip": {
        "source": "iana",
        "compressible": false
    },
    "application/vnd.etsi.asic-s+zip": {
        "source": "iana",
        "compressible": false
    },
    "application/vnd.etsi.cug+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.iptvcommand+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.iptvdiscovery+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.iptvprofile+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.iptvsad-bc+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.iptvsad-cod+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.iptvsad-npvr+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.iptvservice+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.iptvsync+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.iptvueprofile+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.mcid+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.mheg5": {
        "source": "iana"
    },
    "application/vnd.etsi.overload-control-policy-dataset+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.pstn+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.sci+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.simservs+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.timestamp-token": {
        "source": "iana"
    },
    "application/vnd.etsi.tsl+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.etsi.tsl.der": {
        "source": "iana"
    },
    "application/vnd.eudora.data": {
        "source": "iana"
    },
    "application/vnd.evolv.ecig.profile": {
        "source": "iana"
    },
    "application/vnd.evolv.ecig.settings": {
        "source": "iana"
    },
    "application/vnd.evolv.ecig.theme": {
        "source": "iana"
    },
    "application/vnd.exstream-empower+zip": {
        "source": "iana",
        "compressible": false
    },
    "application/vnd.exstream-package": {
        "source": "iana"
    },
    "application/vnd.ezpix-album": {
        "source": "iana",
        "extensions": ["ez2"]
    },
    "application/vnd.ezpix-package": {
        "source": "iana",
        "extensions": ["ez3"]
    },
    "application/vnd.f-secure.mobile": {
        "source": "iana"
    },
    "application/vnd.fastcopy-disk-image": {
        "source": "iana"
    },
    "application/vnd.fdf": {
        "source": "iana",
        "extensions": ["fdf"]
    },
    "application/vnd.fdsn.mseed": {
        "source": "iana",
        "extensions": ["mseed"]
    },
    "application/vnd.fdsn.seed": {
        "source": "iana",
        "extensions": ["seed", "dataless"]
    },
    "application/vnd.ffsns": {
        "source": "iana"
    },
    "application/vnd.filmit.zfc": {
        "source": "iana"
    },
    "application/vnd.fints": {
        "source": "iana"
    },
    "application/vnd.firemonkeys.cloudcell": {
        "source": "iana"
    },
    "application/vnd.flographit": {
        "source": "iana",
        "extensions": ["gph"]
    },
    "application/vnd.fluxtime.clip": {
        "source": "iana",
        "extensions": ["ftc"]
    },
    "application/vnd.font-fontforge-sfd": {
        "source": "iana"
    },
    "application/vnd.framemaker": {
        "source": "iana",
        "extensions": ["fm", "frame", "maker", "book"]
    },
    "application/vnd.frogans.fnc": {
        "source": "iana",
        "extensions": ["fnc"]
    },
    "application/vnd.frogans.ltf": {
        "source": "iana",
        "extensions": ["ltf"]
    },
    "application/vnd.fsc.weblaunch": {
        "source": "iana",
        "extensions": ["fsc"]
    },
    "application/vnd.fujitsu.oasys": {
        "source": "iana",
        "extensions": ["oas"]
    },
    "application/vnd.fujitsu.oasys2": {
        "source": "iana",
        "extensions": ["oa2"]
    },
    "application/vnd.fujitsu.oasys3": {
        "source": "iana",
        "extensions": ["oa3"]
    },
    "application/vnd.fujitsu.oasysgp": {
        "source": "iana",
        "extensions": ["fg5"]
    },
    "application/vnd.fujitsu.oasysprs": {
        "source": "iana",
        "extensions": ["bh2"]
    },
    "application/vnd.fujixerox.art-ex": {
        "source": "iana"
    },
    "application/vnd.fujixerox.art4": {
        "source": "iana"
    },
    "application/vnd.fujixerox.ddd": {
        "source": "iana",
        "extensions": ["ddd"]
    },
    "application/vnd.fujixerox.docuworks": {
        "source": "iana",
        "extensions": ["xdw"]
    },
    "application/vnd.fujixerox.docuworks.binder": {
        "source": "iana",
        "extensions": ["xbd"]
    },
    "application/vnd.fujixerox.docuworks.container": {
        "source": "iana"
    },
    "application/vnd.fujixerox.hbpl": {
        "source": "iana"
    },
    "application/vnd.fut-misnet": {
        "source": "iana"
    },
    "application/vnd.futoin+cbor": {
        "source": "iana"
    },
    "application/vnd.futoin+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.fuzzysheet": {
        "source": "iana",
        "extensions": ["fzs"]
    },
    "application/vnd.genomatix.tuxedo": {
        "source": "iana",
        "extensions": ["txd"]
    },
    "application/vnd.geo+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.geocube+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.geogebra.file": {
        "source": "iana",
        "extensions": ["ggb"]
    },
    "application/vnd.geogebra.tool": {
        "source": "iana",
        "extensions": ["ggt"]
    },
    "application/vnd.geometry-explorer": {
        "source": "iana",
        "extensions": ["gex", "gre"]
    },
    "application/vnd.geonext": {
        "source": "iana",
        "extensions": ["gxt"]
    },
    "application/vnd.geoplan": {
        "source": "iana",
        "extensions": ["g2w"]
    },
    "application/vnd.geospace": {
        "source": "iana",
        "extensions": ["g3w"]
    },
    "application/vnd.gerber": {
        "source": "iana"
    },
    "application/vnd.globalplatform.card-content-mgt": {
        "source": "iana"
    },
    "application/vnd.globalplatform.card-content-mgt-response": {
        "source": "iana"
    },
    "application/vnd.gmx": {
        "source": "iana",
        "extensions": ["gmx"]
    },
    "application/vnd.google-apps.document": {
        "compressible": false,
        "extensions": ["gdoc"]
    },
    "application/vnd.google-apps.presentation": {
        "compressible": false,
        "extensions": ["gslides"]
    },
    "application/vnd.google-apps.spreadsheet": {
        "compressible": false,
        "extensions": ["gsheet"]
    },
    "application/vnd.google-earth.kml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["kml"]
    },
    "application/vnd.google-earth.kmz": {
        "source": "iana",
        "compressible": false,
        "extensions": ["kmz"]
    },
    "application/vnd.gov.sk.e-form+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.gov.sk.e-form+zip": {
        "source": "iana",
        "compressible": false
    },
    "application/vnd.gov.sk.xmldatacontainer+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.grafeq": {
        "source": "iana",
        "extensions": ["gqf", "gqs"]
    },
    "application/vnd.gridmp": {
        "source": "iana"
    },
    "application/vnd.groove-account": {
        "source": "iana",
        "extensions": ["gac"]
    },
    "application/vnd.groove-help": {
        "source": "iana",
        "extensions": ["ghf"]
    },
    "application/vnd.groove-identity-message": {
        "source": "iana",
        "extensions": ["gim"]
    },
    "application/vnd.groove-injector": {
        "source": "iana",
        "extensions": ["grv"]
    },
    "application/vnd.groove-tool-message": {
        "source": "iana",
        "extensions": ["gtm"]
    },
    "application/vnd.groove-tool-template": {
        "source": "iana",
        "extensions": ["tpl"]
    },
    "application/vnd.groove-vcard": {
        "source": "iana",
        "extensions": ["vcg"]
    },
    "application/vnd.hal+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.hal+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["hal"]
    },
    "application/vnd.handheld-entertainment+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["zmm"]
    },
    "application/vnd.hbci": {
        "source": "iana",
        "extensions": ["hbci"]
    },
    "application/vnd.hc+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.hcl-bireports": {
        "source": "iana"
    },
    "application/vnd.hdt": {
        "source": "iana"
    },
    "application/vnd.heroku+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.hhe.lesson-player": {
        "source": "iana",
        "extensions": ["les"]
    },
    "application/vnd.hp-hpgl": {
        "source": "iana",
        "extensions": ["hpgl"]
    },
    "application/vnd.hp-hpid": {
        "source": "iana",
        "extensions": ["hpid"]
    },
    "application/vnd.hp-hps": {
        "source": "iana",
        "extensions": ["hps"]
    },
    "application/vnd.hp-jlyt": {
        "source": "iana",
        "extensions": ["jlt"]
    },
    "application/vnd.hp-pcl": {
        "source": "iana",
        "extensions": ["pcl"]
    },
    "application/vnd.hp-pclxl": {
        "source": "iana",
        "extensions": ["pclxl"]
    },
    "application/vnd.httphone": {
        "source": "iana"
    },
    "application/vnd.hydrostatix.sof-data": {
        "source": "iana",
        "extensions": ["sfd-hdstx"]
    },
    "application/vnd.hyper+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.hyper-item+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.hyperdrive+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.hzn-3d-crossword": {
        "source": "iana"
    },
    "application/vnd.ibm.afplinedata": {
        "source": "iana"
    },
    "application/vnd.ibm.electronic-media": {
        "source": "iana"
    },
    "application/vnd.ibm.minipay": {
        "source": "iana",
        "extensions": ["mpy"]
    },
    "application/vnd.ibm.modcap": {
        "source": "iana",
        "extensions": ["afp", "listafp", "list3820"]
    },
    "application/vnd.ibm.rights-management": {
        "source": "iana",
        "extensions": ["irm"]
    },
    "application/vnd.ibm.secure-container": {
        "source": "iana",
        "extensions": ["sc"]
    },
    "application/vnd.iccprofile": {
        "source": "iana",
        "extensions": ["icc", "icm"]
    },
    "application/vnd.ieee.1905": {
        "source": "iana"
    },
    "application/vnd.igloader": {
        "source": "iana",
        "extensions": ["igl"]
    },
    "application/vnd.imagemeter.folder+zip": {
        "source": "iana",
        "compressible": false
    },
    "application/vnd.imagemeter.image+zip": {
        "source": "iana",
        "compressible": false
    },
    "application/vnd.immervision-ivp": {
        "source": "iana",
        "extensions": ["ivp"]
    },
    "application/vnd.immervision-ivu": {
        "source": "iana",
        "extensions": ["ivu"]
    },
    "application/vnd.ims.imsccv1p1": {
        "source": "iana"
    },
    "application/vnd.ims.imsccv1p2": {
        "source": "iana"
    },
    "application/vnd.ims.imsccv1p3": {
        "source": "iana"
    },
    "application/vnd.ims.lis.v2.result+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ims.lti.v2.toolproxy+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ims.lti.v2.toolproxy.id+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ims.lti.v2.toolsettings+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ims.lti.v2.toolsettings.simple+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.informedcontrol.rms+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.informix-visionary": {
        "source": "iana"
    },
    "application/vnd.infotech.project": {
        "source": "iana"
    },
    "application/vnd.infotech.project+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.innopath.wamp.notification": {
        "source": "iana"
    },
    "application/vnd.insors.igm": {
        "source": "iana",
        "extensions": ["igm"]
    },
    "application/vnd.intercon.formnet": {
        "source": "iana",
        "extensions": ["xpw", "xpx"]
    },
    "application/vnd.intergeo": {
        "source": "iana",
        "extensions": ["i2g"]
    },
    "application/vnd.intertrust.digibox": {
        "source": "iana"
    },
    "application/vnd.intertrust.nncp": {
        "source": "iana"
    },
    "application/vnd.intu.qbo": {
        "source": "iana",
        "extensions": ["qbo"]
    },
    "application/vnd.intu.qfx": {
        "source": "iana",
        "extensions": ["qfx"]
    },
    "application/vnd.iptc.g2.catalogitem+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.iptc.g2.conceptitem+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.iptc.g2.knowledgeitem+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.iptc.g2.newsitem+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.iptc.g2.newsmessage+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.iptc.g2.packageitem+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.iptc.g2.planningitem+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ipunplugged.rcprofile": {
        "source": "iana",
        "extensions": ["rcprofile"]
    },
    "application/vnd.irepository.package+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["irp"]
    },
    "application/vnd.is-xpr": {
        "source": "iana",
        "extensions": ["xpr"]
    },
    "application/vnd.isac.fcs": {
        "source": "iana",
        "extensions": ["fcs"]
    },
    "application/vnd.jam": {
        "source": "iana",
        "extensions": ["jam"]
    },
    "application/vnd.japannet-directory-service": {
        "source": "iana"
    },
    "application/vnd.japannet-jpnstore-wakeup": {
        "source": "iana"
    },
    "application/vnd.japannet-payment-wakeup": {
        "source": "iana"
    },
    "application/vnd.japannet-registration": {
        "source": "iana"
    },
    "application/vnd.japannet-registration-wakeup": {
        "source": "iana"
    },
    "application/vnd.japannet-setstore-wakeup": {
        "source": "iana"
    },
    "application/vnd.japannet-verification": {
        "source": "iana"
    },
    "application/vnd.japannet-verification-wakeup": {
        "source": "iana"
    },
    "application/vnd.jcp.javame.midlet-rms": {
        "source": "iana",
        "extensions": ["rms"]
    },
    "application/vnd.jisp": {
        "source": "iana",
        "extensions": ["jisp"]
    },
    "application/vnd.joost.joda-archive": {
        "source": "iana",
        "extensions": ["joda"]
    },
    "application/vnd.jsk.isdn-ngn": {
        "source": "iana"
    },
    "application/vnd.kahootz": {
        "source": "iana",
        "extensions": ["ktz", "ktr"]
    },
    "application/vnd.kde.karbon": {
        "source": "iana",
        "extensions": ["karbon"]
    },
    "application/vnd.kde.kchart": {
        "source": "iana",
        "extensions": ["chrt"]
    },
    "application/vnd.kde.kformula": {
        "source": "iana",
        "extensions": ["kfo"]
    },
    "application/vnd.kde.kivio": {
        "source": "iana",
        "extensions": ["flw"]
    },
    "application/vnd.kde.kontour": {
        "source": "iana",
        "extensions": ["kon"]
    },
    "application/vnd.kde.kpresenter": {
        "source": "iana",
        "extensions": ["kpr", "kpt"]
    },
    "application/vnd.kde.kspread": {
        "source": "iana",
        "extensions": ["ksp"]
    },
    "application/vnd.kde.kword": {
        "source": "iana",
        "extensions": ["kwd", "kwt"]
    },
    "application/vnd.kenameaapp": {
        "source": "iana",
        "extensions": ["htke"]
    },
    "application/vnd.kidspiration": {
        "source": "iana",
        "extensions": ["kia"]
    },
    "application/vnd.kinar": {
        "source": "iana",
        "extensions": ["kne", "knp"]
    },
    "application/vnd.koan": {
        "source": "iana",
        "extensions": ["skp", "skd", "skt", "skm"]
    },
    "application/vnd.kodak-descriptor": {
        "source": "iana",
        "extensions": ["sse"]
    },
    "application/vnd.las.las+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.las.las+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["lasxml"]
    },
    "application/vnd.leap+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.liberty-request+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.llamagraphics.life-balance.desktop": {
        "source": "iana",
        "extensions": ["lbd"]
    },
    "application/vnd.llamagraphics.life-balance.exchange+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["lbe"]
    },
    "application/vnd.lotus-1-2-3": {
        "source": "iana",
        "extensions": ["123"]
    },
    "application/vnd.lotus-approach": {
        "source": "iana",
        "extensions": ["apr"]
    },
    "application/vnd.lotus-freelance": {
        "source": "iana",
        "extensions": ["pre"]
    },
    "application/vnd.lotus-notes": {
        "source": "iana",
        "extensions": ["nsf"]
    },
    "application/vnd.lotus-organizer": {
        "source": "iana",
        "extensions": ["org"]
    },
    "application/vnd.lotus-screencam": {
        "source": "iana",
        "extensions": ["scm"]
    },
    "application/vnd.lotus-wordpro": {
        "source": "iana",
        "extensions": ["lwp"]
    },
    "application/vnd.macports.portpkg": {
        "source": "iana",
        "extensions": ["portpkg"]
    },
    "application/vnd.mapbox-vector-tile": {
        "source": "iana"
    },
    "application/vnd.marlin.drm.actiontoken+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.marlin.drm.conftoken+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.marlin.drm.license+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.marlin.drm.mdcf": {
        "source": "iana"
    },
    "application/vnd.mason+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.maxmind.maxmind-db": {
        "source": "iana"
    },
    "application/vnd.mcd": {
        "source": "iana",
        "extensions": ["mcd"]
    },
    "application/vnd.medcalcdata": {
        "source": "iana",
        "extensions": ["mc1"]
    },
    "application/vnd.mediastation.cdkey": {
        "source": "iana",
        "extensions": ["cdkey"]
    },
    "application/vnd.meridian-slingshot": {
        "source": "iana"
    },
    "application/vnd.mfer": {
        "source": "iana",
        "extensions": ["mwf"]
    },
    "application/vnd.mfmp": {
        "source": "iana",
        "extensions": ["mfm"]
    },
    "application/vnd.micro+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.micrografx.flo": {
        "source": "iana",
        "extensions": ["flo"]
    },
    "application/vnd.micrografx.igx": {
        "source": "iana",
        "extensions": ["igx"]
    },
    "application/vnd.microsoft.portable-executable": {
        "source": "iana"
    },
    "application/vnd.microsoft.windows.thumbnail-cache": {
        "source": "iana"
    },
    "application/vnd.miele+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.mif": {
        "source": "iana",
        "extensions": ["mif"]
    },
    "application/vnd.minisoft-hp3000-save": {
        "source": "iana"
    },
    "application/vnd.mitsubishi.misty-guard.trustweb": {
        "source": "iana"
    },
    "application/vnd.mobius.daf": {
        "source": "iana",
        "extensions": ["daf"]
    },
    "application/vnd.mobius.dis": {
        "source": "iana",
        "extensions": ["dis"]
    },
    "application/vnd.mobius.mbk": {
        "source": "iana",
        "extensions": ["mbk"]
    },
    "application/vnd.mobius.mqy": {
        "source": "iana",
        "extensions": ["mqy"]
    },
    "application/vnd.mobius.msl": {
        "source": "iana",
        "extensions": ["msl"]
    },
    "application/vnd.mobius.plc": {
        "source": "iana",
        "extensions": ["plc"]
    },
    "application/vnd.mobius.txf": {
        "source": "iana",
        "extensions": ["txf"]
    },
    "application/vnd.mophun.application": {
        "source": "iana",
        "extensions": ["mpn"]
    },
    "application/vnd.mophun.certificate": {
        "source": "iana",
        "extensions": ["mpc"]
    },
    "application/vnd.motorola.flexsuite": {
        "source": "iana"
    },
    "application/vnd.motorola.flexsuite.adsi": {
        "source": "iana"
    },
    "application/vnd.motorola.flexsuite.fis": {
        "source": "iana"
    },
    "application/vnd.motorola.flexsuite.gotap": {
        "source": "iana"
    },
    "application/vnd.motorola.flexsuite.kmr": {
        "source": "iana"
    },
    "application/vnd.motorola.flexsuite.ttc": {
        "source": "iana"
    },
    "application/vnd.motorola.flexsuite.wem": {
        "source": "iana"
    },
    "application/vnd.motorola.iprm": {
        "source": "iana"
    },
    "application/vnd.mozilla.xul+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xul"]
    },
    "application/vnd.ms-3mfdocument": {
        "source": "iana"
    },
    "application/vnd.ms-artgalry": {
        "source": "iana",
        "extensions": ["cil"]
    },
    "application/vnd.ms-asf": {
        "source": "iana"
    },
    "application/vnd.ms-cab-compressed": {
        "source": "iana",
        "extensions": ["cab"]
    },
    "application/vnd.ms-color.iccprofile": {
        "source": "apache"
    },
    "application/vnd.ms-excel": {
        "source": "iana",
        "compressible": false,
        "extensions": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
    },
    "application/vnd.ms-excel.addin.macroenabled.12": {
        "source": "iana",
        "extensions": ["xlam"]
    },
    "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
        "source": "iana",
        "extensions": ["xlsb"]
    },
    "application/vnd.ms-excel.sheet.macroenabled.12": {
        "source": "iana",
        "extensions": ["xlsm"]
    },
    "application/vnd.ms-excel.template.macroenabled.12": {
        "source": "iana",
        "extensions": ["xltm"]
    },
    "application/vnd.ms-fontobject": {
        "source": "iana",
        "compressible": true,
        "extensions": ["eot"]
    },
    "application/vnd.ms-htmlhelp": {
        "source": "iana",
        "extensions": ["chm"]
    },
    "application/vnd.ms-ims": {
        "source": "iana",
        "extensions": ["ims"]
    },
    "application/vnd.ms-lrm": {
        "source": "iana",
        "extensions": ["lrm"]
    },
    "application/vnd.ms-office.activex+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ms-officetheme": {
        "source": "iana",
        "extensions": ["thmx"]
    },
    "application/vnd.ms-opentype": {
        "source": "apache",
        "compressible": true
    },
    "application/vnd.ms-outlook": {
        "compressible": false,
        "extensions": ["msg"]
    },
    "application/vnd.ms-package.obfuscated-opentype": {
        "source": "apache"
    },
    "application/vnd.ms-pki.seccat": {
        "source": "apache",
        "extensions": ["cat"]
    },
    "application/vnd.ms-pki.stl": {
        "source": "apache",
        "extensions": ["stl"]
    },
    "application/vnd.ms-playready.initiator+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ms-powerpoint": {
        "source": "iana",
        "compressible": false,
        "extensions": ["ppt", "pps", "pot"]
    },
    "application/vnd.ms-powerpoint.addin.macroenabled.12": {
        "source": "iana",
        "extensions": ["ppam"]
    },
    "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
        "source": "iana",
        "extensions": ["pptm"]
    },
    "application/vnd.ms-powerpoint.slide.macroenabled.12": {
        "source": "iana",
        "extensions": ["sldm"]
    },
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
        "source": "iana",
        "extensions": ["ppsm"]
    },
    "application/vnd.ms-powerpoint.template.macroenabled.12": {
        "source": "iana",
        "extensions": ["potm"]
    },
    "application/vnd.ms-printdevicecapabilities+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ms-printing.printticket+xml": {
        "source": "apache",
        "compressible": true
    },
    "application/vnd.ms-printschematicket+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.ms-project": {
        "source": "iana",
        "extensions": ["mpp", "mpt"]
    },
    "application/vnd.ms-tnef": {
        "source": "iana"
    },
    "application/vnd.ms-windows.devicepairing": {
        "source": "iana"
    },
    "application/vnd.ms-windows.nwprinting.oob": {
        "source": "iana"
    },
    "application/vnd.ms-windows.printerpairing": {
        "source": "iana"
    },
    "application/vnd.ms-windows.wsd.oob": {
        "source": "iana"
    },
    "application/vnd.ms-wmdrm.lic-chlg-req": {
        "source": "iana"
    },
    "application/vnd.ms-wmdrm.lic-resp": {
        "source": "iana"
    },
    "application/vnd.ms-wmdrm.meter-chlg-req": {
        "source": "iana"
    },
    "application/vnd.ms-wmdrm.meter-resp": {
        "source": "iana"
    },
    "application/vnd.ms-word.document.macroenabled.12": {
        "source": "iana",
        "extensions": ["docm"]
    },
    "application/vnd.ms-word.template.macroenabled.12": {
        "source": "iana",
        "extensions": ["dotm"]
    },
    "application/vnd.ms-works": {
        "source": "iana",
        "extensions": ["wps", "wks", "wcm", "wdb"]
    },
    "application/vnd.ms-wpl": {
        "source": "iana",
        "extensions": ["wpl"]
    },
    "application/vnd.ms-xpsdocument": {
        "source": "iana",
        "compressible": false,
        "extensions": ["xps"]
    },
    "application/vnd.msa-disk-image": {
        "source": "iana"
    },
    "application/vnd.mseq": {
        "source": "iana",
        "extensions": ["mseq"]
    },
    "application/vnd.msign": {
        "source": "iana"
    },
    "application/vnd.multiad.creator": {
        "source": "iana"
    },
    "application/vnd.multiad.creator.cif": {
        "source": "iana"
    },
    "application/vnd.music-niff": {
        "source": "iana"
    },
    "application/vnd.musician": {
        "source": "iana",
        "extensions": ["mus"]
    },
    "application/vnd.muvee.style": {
        "source": "iana",
        "extensions": ["msty"]
    },
    "application/vnd.mynfc": {
        "source": "iana",
        "extensions": ["taglet"]
    },
    "application/vnd.ncd.control": {
        "source": "iana"
    },
    "application/vnd.ncd.reference": {
        "source": "iana"
    },
    "application/vnd.nearst.inv+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.nervana": {
        "source": "iana"
    },
    "application/vnd.netfpx": {
        "source": "iana"
    },
    "application/vnd.neurolanguage.nlu": {
        "source": "iana",
        "extensions": ["nlu"]
    },
    "application/vnd.nimn": {
        "source": "iana"
    },
    "application/vnd.nintendo.nitro.rom": {
        "source": "iana"
    },
    "application/vnd.nintendo.snes.rom": {
        "source": "iana"
    },
    "application/vnd.nitf": {
        "source": "iana",
        "extensions": ["ntf", "nitf"]
    },
    "application/vnd.noblenet-directory": {
        "source": "iana",
        "extensions": ["nnd"]
    },
    "application/vnd.noblenet-sealer": {
        "source": "iana",
        "extensions": ["nns"]
    },
    "application/vnd.noblenet-web": {
        "source": "iana",
        "extensions": ["nnw"]
    },
    "application/vnd.nokia.catalogs": {
        "source": "iana"
    },
    "application/vnd.nokia.conml+wbxml": {
        "source": "iana"
    },
    "application/vnd.nokia.conml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.nokia.iptv.config+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.nokia.isds-radio-presets": {
        "source": "iana"
    },
    "application/vnd.nokia.landmark+wbxml": {
        "source": "iana"
    },
    "application/vnd.nokia.landmark+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.nokia.landmarkcollection+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.nokia.n-gage.ac+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.nokia.n-gage.data": {
        "source": "iana",
        "extensions": ["ngdat"]
    },
    "application/vnd.nokia.n-gage.symbian.install": {
        "source": "iana",
        "extensions": ["n-gage"]
    },
    "application/vnd.nokia.ncd": {
        "source": "iana"
    },
    "application/vnd.nokia.pcd+wbxml": {
        "source": "iana"
    },
    "application/vnd.nokia.pcd+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.nokia.radio-preset": {
        "source": "iana",
        "extensions": ["rpst"]
    },
    "application/vnd.nokia.radio-presets": {
        "source": "iana",
        "extensions": ["rpss"]
    },
    "application/vnd.novadigm.edm": {
        "source": "iana",
        "extensions": ["edm"]
    },
    "application/vnd.novadigm.edx": {
        "source": "iana",
        "extensions": ["edx"]
    },
    "application/vnd.novadigm.ext": {
        "source": "iana",
        "extensions": ["ext"]
    },
    "application/vnd.ntt-local.content-share": {
        "source": "iana"
    },
    "application/vnd.ntt-local.file-transfer": {
        "source": "iana"
    },
    "application/vnd.ntt-local.ogw_remote-access": {
        "source": "iana"
    },
    "application/vnd.ntt-local.sip-ta_remote": {
        "source": "iana"
    },
    "application/vnd.ntt-local.sip-ta_tcp_stream": {
        "source": "iana"
    },
    "application/vnd.oasis.opendocument.chart": {
        "source": "iana",
        "extensions": ["odc"]
    },
    "application/vnd.oasis.opendocument.chart-template": {
        "source": "iana",
        "extensions": ["otc"]
    },
    "application/vnd.oasis.opendocument.database": {
        "source": "iana",
        "extensions": ["odb"]
    },
    "application/vnd.oasis.opendocument.formula": {
        "source": "iana",
        "extensions": ["odf"]
    },
    "application/vnd.oasis.opendocument.formula-template": {
        "source": "iana",
        "extensions": ["odft"]
    },
    "application/vnd.oasis.opendocument.graphics": {
        "source": "iana",
        "compressible": false,
        "extensions": ["odg"]
    },
    "application/vnd.oasis.opendocument.graphics-template": {
        "source": "iana",
        "extensions": ["otg"]
    },
    "application/vnd.oasis.opendocument.image": {
        "source": "iana",
        "extensions": ["odi"]
    },
    "application/vnd.oasis.opendocument.image-template": {
        "source": "iana",
        "extensions": ["oti"]
    },
    "application/vnd.oasis.opendocument.presentation": {
        "source": "iana",
        "compressible": false,
        "extensions": ["odp"]
    },
    "application/vnd.oasis.opendocument.presentation-template": {
        "source": "iana",
        "extensions": ["otp"]
    },
    "application/vnd.oasis.opendocument.spreadsheet": {
        "source": "iana",
        "compressible": false,
        "extensions": ["ods"]
    },
    "application/vnd.oasis.opendocument.spreadsheet-template": {
        "source": "iana",
        "extensions": ["ots"]
    },
    "application/vnd.oasis.opendocument.text": {
        "source": "iana",
        "compressible": false,
        "extensions": ["odt"]
    },
    "application/vnd.oasis.opendocument.text-master": {
        "source": "iana",
        "extensions": ["odm"]
    },
    "application/vnd.oasis.opendocument.text-template": {
        "source": "iana",
        "extensions": ["ott"]
    },
    "application/vnd.oasis.opendocument.text-web": {
        "source": "iana",
        "extensions": ["oth"]
    },
    "application/vnd.obn": {
        "source": "iana"
    },
    "application/vnd.ocf+cbor": {
        "source": "iana"
    },
    "application/vnd.oftn.l10n+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oipf.contentaccessdownload+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oipf.contentaccessstreaming+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oipf.cspg-hexbinary": {
        "source": "iana"
    },
    "application/vnd.oipf.dae.svg+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oipf.dae.xhtml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oipf.mippvcontrolmessage+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oipf.pae.gem": {
        "source": "iana"
    },
    "application/vnd.oipf.spdiscovery+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oipf.spdlist+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oipf.ueprofile+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oipf.userprofile+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.olpc-sugar": {
        "source": "iana",
        "extensions": ["xo"]
    },
    "application/vnd.oma-scws-config": {
        "source": "iana"
    },
    "application/vnd.oma-scws-http-request": {
        "source": "iana"
    },
    "application/vnd.oma-scws-http-response": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.bcast.drm-trigger+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.bcast.imd+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.bcast.ltkm": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.notification+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.bcast.provisioningtrigger": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.sgboot": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.sgdd+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.bcast.sgdu": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.simple-symbol-container": {
        "source": "iana"
    },
    "application/vnd.oma.bcast.smartcard-trigger+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.bcast.sprov+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.bcast.stkm": {
        "source": "iana"
    },
    "application/vnd.oma.cab-address-book+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.cab-feature-handler+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.cab-pcc+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.cab-subs-invite+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.cab-user-prefs+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.dcd": {
        "source": "iana"
    },
    "application/vnd.oma.dcdc": {
        "source": "iana"
    },
    "application/vnd.oma.dd2+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["dd2"]
    },
    "application/vnd.oma.drm.risd+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.group-usage-list+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.lwm2m+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.lwm2m+tlv": {
        "source": "iana"
    },
    "application/vnd.oma.pal+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.poc.detailed-progress-report+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.poc.final-report+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.poc.groups+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.poc.invocation-descriptor+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.poc.optimized-progress-report+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.push": {
        "source": "iana"
    },
    "application/vnd.oma.scidm.messages+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oma.xcap-directory+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.omads-email+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.omads-file+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.omads-folder+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.omaloc-supl-init": {
        "source": "iana"
    },
    "application/vnd.onepager": {
        "source": "iana"
    },
    "application/vnd.onepagertamp": {
        "source": "iana"
    },
    "application/vnd.onepagertamx": {
        "source": "iana"
    },
    "application/vnd.onepagertat": {
        "source": "iana"
    },
    "application/vnd.onepagertatp": {
        "source": "iana"
    },
    "application/vnd.onepagertatx": {
        "source": "iana"
    },
    "application/vnd.openblox.game+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openblox.game-binary": {
        "source": "iana"
    },
    "application/vnd.openeye.oeb": {
        "source": "iana"
    },
    "application/vnd.openofficeorg.extension": {
        "source": "apache",
        "extensions": ["oxt"]
    },
    "application/vnd.openstreetmap.data+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.drawing+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        "source": "iana",
        "compressible": false,
        "extensions": ["pptx"]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slide": {
        "source": "iana",
        "extensions": ["sldx"]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
        "source": "iana",
        "extensions": ["ppsx"]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.template": {
        "source": "iana",
        "extensions": ["potx"]
    },
    "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        "source": "iana",
        "compressible": false,
        "extensions": ["xlsx"]
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
        "source": "iana",
        "extensions": ["xltx"]
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.theme+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.vmldrawing": {
        "source": "iana"
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        "source": "iana",
        "compressible": false,
        "extensions": ["docx"]
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
        "source": "iana",
        "extensions": ["dotx"]
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-package.core-properties+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.openxmlformats-package.relationships+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oracle.resource+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.orange.indata": {
        "source": "iana"
    },
    "application/vnd.osa.netdeploy": {
        "source": "iana"
    },
    "application/vnd.osgeo.mapguide.package": {
        "source": "iana",
        "extensions": ["mgp"]
    },
    "application/vnd.osgi.bundle": {
        "source": "iana"
    },
    "application/vnd.osgi.dp": {
        "source": "iana",
        "extensions": ["dp"]
    },
    "application/vnd.osgi.subsystem": {
        "source": "iana",
        "extensions": ["esa"]
    },
    "application/vnd.otps.ct-kip+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.oxli.countgraph": {
        "source": "iana"
    },
    "application/vnd.pagerduty+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.palm": {
        "source": "iana",
        "extensions": ["pdb", "pqa", "oprc"]
    },
    "application/vnd.panoply": {
        "source": "iana"
    },
    "application/vnd.paos.xml": {
        "source": "iana"
    },
    "application/vnd.patentdive": {
        "source": "iana"
    },
    "application/vnd.patientecommsdoc": {
        "source": "iana"
    },
    "application/vnd.pawaafile": {
        "source": "iana",
        "extensions": ["paw"]
    },
    "application/vnd.pcos": {
        "source": "iana"
    },
    "application/vnd.pg.format": {
        "source": "iana",
        "extensions": ["str"]
    },
    "application/vnd.pg.osasli": {
        "source": "iana",
        "extensions": ["ei6"]
    },
    "application/vnd.piaccess.application-licence": {
        "source": "iana"
    },
    "application/vnd.picsel": {
        "source": "iana",
        "extensions": ["efif"]
    },
    "application/vnd.pmi.widget": {
        "source": "iana",
        "extensions": ["wg"]
    },
    "application/vnd.poc.group-advertisement+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.pocketlearn": {
        "source": "iana",
        "extensions": ["plf"]
    },
    "application/vnd.powerbuilder6": {
        "source": "iana",
        "extensions": ["pbd"]
    },
    "application/vnd.powerbuilder6-s": {
        "source": "iana"
    },
    "application/vnd.powerbuilder7": {
        "source": "iana"
    },
    "application/vnd.powerbuilder7-s": {
        "source": "iana"
    },
    "application/vnd.powerbuilder75": {
        "source": "iana"
    },
    "application/vnd.powerbuilder75-s": {
        "source": "iana"
    },
    "application/vnd.preminet": {
        "source": "iana"
    },
    "application/vnd.previewsystems.box": {
        "source": "iana",
        "extensions": ["box"]
    },
    "application/vnd.proteus.magazine": {
        "source": "iana",
        "extensions": ["mgz"]
    },
    "application/vnd.psfs": {
        "source": "iana"
    },
    "application/vnd.publishare-delta-tree": {
        "source": "iana",
        "extensions": ["qps"]
    },
    "application/vnd.pvi.ptid1": {
        "source": "iana",
        "extensions": ["ptid"]
    },
    "application/vnd.pwg-multiplexed": {
        "source": "iana"
    },
    "application/vnd.pwg-xhtml-print+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.qualcomm.brew-app-res": {
        "source": "iana"
    },
    "application/vnd.quarantainenet": {
        "source": "iana"
    },
    "application/vnd.quark.quarkxpress": {
        "source": "iana",
        "extensions": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]
    },
    "application/vnd.quobject-quoxdocument": {
        "source": "iana"
    },
    "application/vnd.radisys.moml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-audit+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-audit-conf+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-audit-conn+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-audit-dialog+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-audit-stream+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-conf+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-dialog+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-dialog-base+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-dialog-fax-detect+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-dialog-group+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-dialog-speech+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.radisys.msml-dialog-transform+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.rainstor.data": {
        "source": "iana"
    },
    "application/vnd.rapid": {
        "source": "iana"
    },
    "application/vnd.rar": {
        "source": "iana"
    },
    "application/vnd.realvnc.bed": {
        "source": "iana",
        "extensions": ["bed"]
    },
    "application/vnd.recordare.musicxml": {
        "source": "iana",
        "extensions": ["mxl"]
    },
    "application/vnd.recordare.musicxml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["musicxml"]
    },
    "application/vnd.renlearn.rlprint": {
        "source": "iana"
    },
    "application/vnd.restful+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.rig.cryptonote": {
        "source": "iana",
        "extensions": ["cryptonote"]
    },
    "application/vnd.rim.cod": {
        "source": "apache",
        "extensions": ["cod"]
    },
    "application/vnd.rn-realmedia": {
        "source": "apache",
        "extensions": ["rm"]
    },
    "application/vnd.rn-realmedia-vbr": {
        "source": "apache",
        "extensions": ["rmvb"]
    },
    "application/vnd.route66.link66+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["link66"]
    },
    "application/vnd.rs-274x": {
        "source": "iana"
    },
    "application/vnd.ruckus.download": {
        "source": "iana"
    },
    "application/vnd.s3sms": {
        "source": "iana"
    },
    "application/vnd.sailingtracker.track": {
        "source": "iana",
        "extensions": ["st"]
    },
    "application/vnd.sbm.cid": {
        "source": "iana"
    },
    "application/vnd.sbm.mid2": {
        "source": "iana"
    },
    "application/vnd.scribus": {
        "source": "iana"
    },
    "application/vnd.sealed.3df": {
        "source": "iana"
    },
    "application/vnd.sealed.csf": {
        "source": "iana"
    },
    "application/vnd.sealed.doc": {
        "source": "iana"
    },
    "application/vnd.sealed.eml": {
        "source": "iana"
    },
    "application/vnd.sealed.mht": {
        "source": "iana"
    },
    "application/vnd.sealed.net": {
        "source": "iana"
    },
    "application/vnd.sealed.ppt": {
        "source": "iana"
    },
    "application/vnd.sealed.tiff": {
        "source": "iana"
    },
    "application/vnd.sealed.xls": {
        "source": "iana"
    },
    "application/vnd.sealedmedia.softseal.html": {
        "source": "iana"
    },
    "application/vnd.sealedmedia.softseal.pdf": {
        "source": "iana"
    },
    "application/vnd.seemail": {
        "source": "iana",
        "extensions": ["see"]
    },
    "application/vnd.sema": {
        "source": "iana",
        "extensions": ["sema"]
    },
    "application/vnd.semd": {
        "source": "iana",
        "extensions": ["semd"]
    },
    "application/vnd.semf": {
        "source": "iana",
        "extensions": ["semf"]
    },
    "application/vnd.shana.informed.formdata": {
        "source": "iana",
        "extensions": ["ifm"]
    },
    "application/vnd.shana.informed.formtemplate": {
        "source": "iana",
        "extensions": ["itp"]
    },
    "application/vnd.shana.informed.interchange": {
        "source": "iana",
        "extensions": ["iif"]
    },
    "application/vnd.shana.informed.package": {
        "source": "iana",
        "extensions": ["ipk"]
    },
    "application/vnd.shootproof+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.sigrok.session": {
        "source": "iana"
    },
    "application/vnd.simtech-mindmapper": {
        "source": "iana",
        "extensions": ["twd", "twds"]
    },
    "application/vnd.siren+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.smaf": {
        "source": "iana",
        "extensions": ["mmf"]
    },
    "application/vnd.smart.notebook": {
        "source": "iana"
    },
    "application/vnd.smart.teacher": {
        "source": "iana",
        "extensions": ["teacher"]
    },
    "application/vnd.software602.filler.form+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.software602.filler.form-xml-zip": {
        "source": "iana"
    },
    "application/vnd.solent.sdkm+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["sdkm", "sdkd"]
    },
    "application/vnd.spotfire.dxp": {
        "source": "iana",
        "extensions": ["dxp"]
    },
    "application/vnd.spotfire.sfs": {
        "source": "iana",
        "extensions": ["sfs"]
    },
    "application/vnd.sqlite3": {
        "source": "iana"
    },
    "application/vnd.sss-cod": {
        "source": "iana"
    },
    "application/vnd.sss-dtf": {
        "source": "iana"
    },
    "application/vnd.sss-ntf": {
        "source": "iana"
    },
    "application/vnd.stardivision.calc": {
        "source": "apache",
        "extensions": ["sdc"]
    },
    "application/vnd.stardivision.draw": {
        "source": "apache",
        "extensions": ["sda"]
    },
    "application/vnd.stardivision.impress": {
        "source": "apache",
        "extensions": ["sdd"]
    },
    "application/vnd.stardivision.math": {
        "source": "apache",
        "extensions": ["smf"]
    },
    "application/vnd.stardivision.writer": {
        "source": "apache",
        "extensions": ["sdw", "vor"]
    },
    "application/vnd.stardivision.writer-global": {
        "source": "apache",
        "extensions": ["sgl"]
    },
    "application/vnd.stepmania.package": {
        "source": "iana",
        "extensions": ["smzip"]
    },
    "application/vnd.stepmania.stepchart": {
        "source": "iana",
        "extensions": ["sm"]
    },
    "application/vnd.street-stream": {
        "source": "iana"
    },
    "application/vnd.sun.wadl+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["wadl"]
    },
    "application/vnd.sun.xml.calc": {
        "source": "apache",
        "extensions": ["sxc"]
    },
    "application/vnd.sun.xml.calc.template": {
        "source": "apache",
        "extensions": ["stc"]
    },
    "application/vnd.sun.xml.draw": {
        "source": "apache",
        "extensions": ["sxd"]
    },
    "application/vnd.sun.xml.draw.template": {
        "source": "apache",
        "extensions": ["std"]
    },
    "application/vnd.sun.xml.impress": {
        "source": "apache",
        "extensions": ["sxi"]
    },
    "application/vnd.sun.xml.impress.template": {
        "source": "apache",
        "extensions": ["sti"]
    },
    "application/vnd.sun.xml.math": {
        "source": "apache",
        "extensions": ["sxm"]
    },
    "application/vnd.sun.xml.writer": {
        "source": "apache",
        "extensions": ["sxw"]
    },
    "application/vnd.sun.xml.writer.global": {
        "source": "apache",
        "extensions": ["sxg"]
    },
    "application/vnd.sun.xml.writer.template": {
        "source": "apache",
        "extensions": ["stw"]
    },
    "application/vnd.sus-calendar": {
        "source": "iana",
        "extensions": ["sus", "susp"]
    },
    "application/vnd.svd": {
        "source": "iana",
        "extensions": ["svd"]
    },
    "application/vnd.swiftview-ics": {
        "source": "iana"
    },
    "application/vnd.symbian.install": {
        "source": "apache",
        "extensions": ["sis", "sisx"]
    },
    "application/vnd.syncml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xsm"]
    },
    "application/vnd.syncml.dm+wbxml": {
        "source": "iana",
        "extensions": ["bdm"]
    },
    "application/vnd.syncml.dm+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xdm"]
    },
    "application/vnd.syncml.dm.notification": {
        "source": "iana"
    },
    "application/vnd.syncml.dmddf+wbxml": {
        "source": "iana"
    },
    "application/vnd.syncml.dmddf+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.syncml.dmtnds+wbxml": {
        "source": "iana"
    },
    "application/vnd.syncml.dmtnds+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.syncml.ds.notification": {
        "source": "iana"
    },
    "application/vnd.tableschema+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.tao.intent-module-archive": {
        "source": "iana",
        "extensions": ["tao"]
    },
    "application/vnd.tcpdump.pcap": {
        "source": "iana",
        "extensions": ["pcap", "cap", "dmp"]
    },
    "application/vnd.think-cell.ppttc+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.tmd.mediaflex.api+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.tml": {
        "source": "iana"
    },
    "application/vnd.tmobile-livetv": {
        "source": "iana",
        "extensions": ["tmo"]
    },
    "application/vnd.tri.onesource": {
        "source": "iana"
    },
    "application/vnd.trid.tpt": {
        "source": "iana",
        "extensions": ["tpt"]
    },
    "application/vnd.triscape.mxs": {
        "source": "iana",
        "extensions": ["mxs"]
    },
    "application/vnd.trueapp": {
        "source": "iana",
        "extensions": ["tra"]
    },
    "application/vnd.truedoc": {
        "source": "iana"
    },
    "application/vnd.ubisoft.webplayer": {
        "source": "iana"
    },
    "application/vnd.ufdl": {
        "source": "iana",
        "extensions": ["ufd", "ufdl"]
    },
    "application/vnd.uiq.theme": {
        "source": "iana",
        "extensions": ["utz"]
    },
    "application/vnd.umajin": {
        "source": "iana",
        "extensions": ["umj"]
    },
    "application/vnd.unity": {
        "source": "iana",
        "extensions": ["unityweb"]
    },
    "application/vnd.uoml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["uoml"]
    },
    "application/vnd.uplanet.alert": {
        "source": "iana"
    },
    "application/vnd.uplanet.alert-wbxml": {
        "source": "iana"
    },
    "application/vnd.uplanet.bearer-choice": {
        "source": "iana"
    },
    "application/vnd.uplanet.bearer-choice-wbxml": {
        "source": "iana"
    },
    "application/vnd.uplanet.cacheop": {
        "source": "iana"
    },
    "application/vnd.uplanet.cacheop-wbxml": {
        "source": "iana"
    },
    "application/vnd.uplanet.channel": {
        "source": "iana"
    },
    "application/vnd.uplanet.channel-wbxml": {
        "source": "iana"
    },
    "application/vnd.uplanet.list": {
        "source": "iana"
    },
    "application/vnd.uplanet.list-wbxml": {
        "source": "iana"
    },
    "application/vnd.uplanet.listcmd": {
        "source": "iana"
    },
    "application/vnd.uplanet.listcmd-wbxml": {
        "source": "iana"
    },
    "application/vnd.uplanet.signal": {
        "source": "iana"
    },
    "application/vnd.uri-map": {
        "source": "iana"
    },
    "application/vnd.valve.source.material": {
        "source": "iana"
    },
    "application/vnd.vcx": {
        "source": "iana",
        "extensions": ["vcx"]
    },
    "application/vnd.vd-study": {
        "source": "iana"
    },
    "application/vnd.vectorworks": {
        "source": "iana"
    },
    "application/vnd.vel+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.verimatrix.vcas": {
        "source": "iana"
    },
    "application/vnd.veryant.thin": {
        "source": "iana"
    },
    "application/vnd.vidsoft.vidconference": {
        "source": "iana"
    },
    "application/vnd.visio": {
        "source": "iana",
        "extensions": ["vsd", "vst", "vss", "vsw"]
    },
    "application/vnd.visionary": {
        "source": "iana",
        "extensions": ["vis"]
    },
    "application/vnd.vividence.scriptfile": {
        "source": "iana"
    },
    "application/vnd.vsf": {
        "source": "iana",
        "extensions": ["vsf"]
    },
    "application/vnd.wap.sic": {
        "source": "iana"
    },
    "application/vnd.wap.slc": {
        "source": "iana"
    },
    "application/vnd.wap.wbxml": {
        "source": "iana",
        "extensions": ["wbxml"]
    },
    "application/vnd.wap.wmlc": {
        "source": "iana",
        "extensions": ["wmlc"]
    },
    "application/vnd.wap.wmlscriptc": {
        "source": "iana",
        "extensions": ["wmlsc"]
    },
    "application/vnd.webturbo": {
        "source": "iana",
        "extensions": ["wtb"]
    },
    "application/vnd.wfa.p2p": {
        "source": "iana"
    },
    "application/vnd.wfa.wsc": {
        "source": "iana"
    },
    "application/vnd.windows.devicepairing": {
        "source": "iana"
    },
    "application/vnd.wmc": {
        "source": "iana"
    },
    "application/vnd.wmf.bootstrap": {
        "source": "iana"
    },
    "application/vnd.wolfram.mathematica": {
        "source": "iana"
    },
    "application/vnd.wolfram.mathematica.package": {
        "source": "iana"
    },
    "application/vnd.wolfram.player": {
        "source": "iana",
        "extensions": ["nbp"]
    },
    "application/vnd.wordperfect": {
        "source": "iana",
        "extensions": ["wpd"]
    },
    "application/vnd.wqd": {
        "source": "iana",
        "extensions": ["wqd"]
    },
    "application/vnd.wrq-hp3000-labelled": {
        "source": "iana"
    },
    "application/vnd.wt.stf": {
        "source": "iana",
        "extensions": ["stf"]
    },
    "application/vnd.wv.csp+wbxml": {
        "source": "iana"
    },
    "application/vnd.wv.csp+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.wv.ssp+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.xacml+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.xara": {
        "source": "iana",
        "extensions": ["xar"]
    },
    "application/vnd.xfdl": {
        "source": "iana",
        "extensions": ["xfdl"]
    },
    "application/vnd.xfdl.webform": {
        "source": "iana"
    },
    "application/vnd.xmi+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/vnd.xmpie.cpkg": {
        "source": "iana"
    },
    "application/vnd.xmpie.dpkg": {
        "source": "iana"
    },
    "application/vnd.xmpie.plan": {
        "source": "iana"
    },
    "application/vnd.xmpie.ppkg": {
        "source": "iana"
    },
    "application/vnd.xmpie.xlim": {
        "source": "iana"
    },
    "application/vnd.yamaha.hv-dic": {
        "source": "iana",
        "extensions": ["hvd"]
    },
    "application/vnd.yamaha.hv-script": {
        "source": "iana",
        "extensions": ["hvs"]
    },
    "application/vnd.yamaha.hv-voice": {
        "source": "iana",
        "extensions": ["hvp"]
    },
    "application/vnd.yamaha.openscoreformat": {
        "source": "iana",
        "extensions": ["osf"]
    },
    "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["osfpvg"]
    },
    "application/vnd.yamaha.remote-setup": {
        "source": "iana"
    },
    "application/vnd.yamaha.smaf-audio": {
        "source": "iana",
        "extensions": ["saf"]
    },
    "application/vnd.yamaha.smaf-phrase": {
        "source": "iana",
        "extensions": ["spf"]
    },
    "application/vnd.yamaha.through-ngn": {
        "source": "iana"
    },
    "application/vnd.yamaha.tunnel-udpencap": {
        "source": "iana"
    },
    "application/vnd.yaoweme": {
        "source": "iana"
    },
    "application/vnd.yellowriver-custom-menu": {
        "source": "iana",
        "extensions": ["cmp"]
    },
    "application/vnd.youtube.yt": {
        "source": "iana"
    },
    "application/vnd.zul": {
        "source": "iana",
        "extensions": ["zir", "zirz"]
    },
    "application/vnd.zzazz.deck+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["zaz"]
    },
    "application/voicexml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["vxml"]
    },
    "application/voucher-cms+json": {
        "source": "iana",
        "compressible": true
    },
    "application/vq-rtcpxr": {
        "source": "iana"
    },
    "application/wasm": {
        "compressible": true,
        "extensions": ["wasm"]
    },
    "application/watcherinfo+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/webpush-options+json": {
        "source": "iana",
        "compressible": true
    },
    "application/whoispp-query": {
        "source": "iana"
    },
    "application/whoispp-response": {
        "source": "iana"
    },
    "application/widget": {
        "source": "iana",
        "extensions": ["wgt"]
    },
    "application/winhlp": {
        "source": "apache",
        "extensions": ["hlp"]
    },
    "application/wita": {
        "source": "iana"
    },
    "application/wordperfect5.1": {
        "source": "iana"
    },
    "application/wsdl+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["wsdl"]
    },
    "application/wspolicy+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["wspolicy"]
    },
    "application/x-7z-compressed": {
        "source": "apache",
        "compressible": false,
        "extensions": ["7z"]
    },
    "application/x-abiword": {
        "source": "apache",
        "extensions": ["abw"]
    },
    "application/x-ace-compressed": {
        "source": "apache",
        "extensions": ["ace"]
    },
    "application/x-amf": {
        "source": "apache"
    },
    "application/x-apple-diskimage": {
        "source": "apache",
        "extensions": ["dmg"]
    },
    "application/x-arj": {
        "compressible": false,
        "extensions": ["arj"]
    },
    "application/x-authorware-bin": {
        "source": "apache",
        "extensions": ["aab", "x32", "u32", "vox"]
    },
    "application/x-authorware-map": {
        "source": "apache",
        "extensions": ["aam"]
    },
    "application/x-authorware-seg": {
        "source": "apache",
        "extensions": ["aas"]
    },
    "application/x-bcpio": {
        "source": "apache",
        "extensions": ["bcpio"]
    },
    "application/x-bdoc": {
        "compressible": false,
        "extensions": ["bdoc"]
    },
    "application/x-bittorrent": {
        "source": "apache",
        "extensions": ["torrent"]
    },
    "application/x-blorb": {
        "source": "apache",
        "extensions": ["blb", "blorb"]
    },
    "application/x-bzip": {
        "source": "apache",
        "compressible": false,
        "extensions": ["bz"]
    },
    "application/x-bzip2": {
        "source": "apache",
        "compressible": false,
        "extensions": ["bz2", "boz"]
    },
    "application/x-cbr": {
        "source": "apache",
        "extensions": ["cbr", "cba", "cbt", "cbz", "cb7"]
    },
    "application/x-cdlink": {
        "source": "apache",
        "extensions": ["vcd"]
    },
    "application/x-cfs-compressed": {
        "source": "apache",
        "extensions": ["cfs"]
    },
    "application/x-chat": {
        "source": "apache",
        "extensions": ["chat"]
    },
    "application/x-chess-pgn": {
        "source": "apache",
        "extensions": ["pgn"]
    },
    "application/x-chrome-extension": {
        "extensions": ["crx"]
    },
    "application/x-cocoa": {
        "source": "nginx",
        "extensions": ["cco"]
    },
    "application/x-compress": {
        "source": "apache"
    },
    "application/x-conference": {
        "source": "apache",
        "extensions": ["nsc"]
    },
    "application/x-cpio": {
        "source": "apache",
        "extensions": ["cpio"]
    },
    "application/x-csh": {
        "source": "apache",
        "extensions": ["csh"]
    },
    "application/x-deb": {
        "compressible": false
    },
    "application/x-debian-package": {
        "source": "apache",
        "extensions": ["deb", "udeb"]
    },
    "application/x-dgc-compressed": {
        "source": "apache",
        "extensions": ["dgc"]
    },
    "application/x-director": {
        "source": "apache",
        "extensions": [
            "dir",
            "dcr",
            "dxr",
            "cst",
            "cct",
            "cxt",
            "w3d",
            "fgd",
            "swa"
        ]
    },
    "application/x-doom": {
        "source": "apache",
        "extensions": ["wad"]
    },
    "application/x-dtbncx+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["ncx"]
    },
    "application/x-dtbook+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["dtb"]
    },
    "application/x-dtbresource+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["res"]
    },
    "application/x-dvi": {
        "source": "apache",
        "compressible": false,
        "extensions": ["dvi"]
    },
    "application/x-envoy": {
        "source": "apache",
        "extensions": ["evy"]
    },
    "application/x-eva": {
        "source": "apache",
        "extensions": ["eva"]
    },
    "application/x-font-bdf": {
        "source": "apache",
        "extensions": ["bdf"]
    },
    "application/x-font-dos": {
        "source": "apache"
    },
    "application/x-font-framemaker": {
        "source": "apache"
    },
    "application/x-font-ghostscript": {
        "source": "apache",
        "extensions": ["gsf"]
    },
    "application/x-font-libgrx": {
        "source": "apache"
    },
    "application/x-font-linux-psf": {
        "source": "apache",
        "extensions": ["psf"]
    },
    "application/x-font-pcf": {
        "source": "apache",
        "extensions": ["pcf"]
    },
    "application/x-font-snf": {
        "source": "apache",
        "extensions": ["snf"]
    },
    "application/x-font-speedo": {
        "source": "apache"
    },
    "application/x-font-sunos-news": {
        "source": "apache"
    },
    "application/x-font-type1": {
        "source": "apache",
        "extensions": ["pfa", "pfb", "pfm", "afm"]
    },
    "application/x-font-vfont": {
        "source": "apache"
    },
    "application/x-freearc": {
        "source": "apache",
        "extensions": ["arc"]
    },
    "application/x-futuresplash": {
        "source": "apache",
        "extensions": ["spl"]
    },
    "application/x-gca-compressed": {
        "source": "apache",
        "extensions": ["gca"]
    },
    "application/x-glulx": {
        "source": "apache",
        "extensions": ["ulx"]
    },
    "application/x-gnumeric": {
        "source": "apache",
        "extensions": ["gnumeric"]
    },
    "application/x-gramps-xml": {
        "source": "apache",
        "extensions": ["gramps"]
    },
    "application/x-gtar": {
        "source": "apache",
        "extensions": ["gtar"]
    },
    "application/x-gzip": {
        "source": "apache"
    },
    "application/x-hdf": {
        "source": "apache",
        "extensions": ["hdf"]
    },
    "application/x-httpd-php": {
        "compressible": true,
        "extensions": ["php"]
    },
    "application/x-install-instructions": {
        "source": "apache",
        "extensions": ["install"]
    },
    "application/x-iso9660-image": {
        "source": "apache",
        "extensions": ["iso"]
    },
    "application/x-java-archive-diff": {
        "source": "nginx",
        "extensions": ["jardiff"]
    },
    "application/x-java-jnlp-file": {
        "source": "apache",
        "compressible": false,
        "extensions": ["jnlp"]
    },
    "application/x-javascript": {
        "compressible": true
    },
    "application/x-latex": {
        "source": "apache",
        "compressible": false,
        "extensions": ["latex"]
    },
    "application/x-lua-bytecode": {
        "extensions": ["luac"]
    },
    "application/x-lzh-compressed": {
        "source": "apache",
        "extensions": ["lzh", "lha"]
    },
    "application/x-makeself": {
        "source": "nginx",
        "extensions": ["run"]
    },
    "application/x-mie": {
        "source": "apache",
        "extensions": ["mie"]
    },
    "application/x-mobipocket-ebook": {
        "source": "apache",
        "extensions": ["prc", "mobi"]
    },
    "application/x-mpegurl": {
        "compressible": false
    },
    "application/x-ms-application": {
        "source": "apache",
        "extensions": ["application"]
    },
    "application/x-ms-shortcut": {
        "source": "apache",
        "extensions": ["lnk"]
    },
    "application/x-ms-wmd": {
        "source": "apache",
        "extensions": ["wmd"]
    },
    "application/x-ms-wmz": {
        "source": "apache",
        "extensions": ["wmz"]
    },
    "application/x-ms-xbap": {
        "source": "apache",
        "extensions": ["xbap"]
    },
    "application/x-msaccess": {
        "source": "apache",
        "extensions": ["mdb"]
    },
    "application/x-msbinder": {
        "source": "apache",
        "extensions": ["obd"]
    },
    "application/x-mscardfile": {
        "source": "apache",
        "extensions": ["crd"]
    },
    "application/x-msclip": {
        "source": "apache",
        "extensions": ["clp"]
    },
    "application/x-msdos-program": {
        "extensions": ["exe"]
    },
    "application/x-msdownload": {
        "source": "apache",
        "extensions": ["exe", "dll", "com", "bat", "msi"]
    },
    "application/x-msmediaview": {
        "source": "apache",
        "extensions": ["mvb", "m13", "m14"]
    },
    "application/x-msmetafile": {
        "source": "apache",
        "extensions": ["wmf", "wmz", "emf", "emz"]
    },
    "application/x-msmoney": {
        "source": "apache",
        "extensions": ["mny"]
    },
    "application/x-mspublisher": {
        "source": "apache",
        "extensions": ["pub"]
    },
    "application/x-msschedule": {
        "source": "apache",
        "extensions": ["scd"]
    },
    "application/x-msterminal": {
        "source": "apache",
        "extensions": ["trm"]
    },
    "application/x-mswrite": {
        "source": "apache",
        "extensions": ["wri"]
    },
    "application/x-netcdf": {
        "source": "apache",
        "extensions": ["nc", "cdf"]
    },
    "application/x-ns-proxy-autoconfig": {
        "compressible": true,
        "extensions": ["pac"]
    },
    "application/x-nzb": {
        "source": "apache",
        "extensions": ["nzb"]
    },
    "application/x-perl": {
        "source": "nginx",
        "extensions": ["pl", "pm"]
    },
    "application/x-pilot": {
        "source": "nginx",
        "extensions": ["prc", "pdb"]
    },
    "application/x-pkcs12": {
        "source": "apache",
        "compressible": false,
        "extensions": ["p12", "pfx"]
    },
    "application/x-pkcs7-certificates": {
        "source": "apache",
        "extensions": ["p7b", "spc"]
    },
    "application/x-pkcs7-certreqresp": {
        "source": "apache",
        "extensions": ["p7r"]
    },
    "application/x-rar-compressed": {
        "source": "apache",
        "compressible": false,
        "extensions": ["rar"]
    },
    "application/x-redhat-package-manager": {
        "source": "nginx",
        "extensions": ["rpm"]
    },
    "application/x-research-info-systems": {
        "source": "apache",
        "extensions": ["ris"]
    },
    "application/x-sea": {
        "source": "nginx",
        "extensions": ["sea"]
    },
    "application/x-sh": {
        "source": "apache",
        "compressible": true,
        "extensions": ["sh"]
    },
    "application/x-shar": {
        "source": "apache",
        "extensions": ["shar"]
    },
    "application/x-shockwave-flash": {
        "source": "apache",
        "compressible": false,
        "extensions": ["swf"]
    },
    "application/x-silverlight-app": {
        "source": "apache",
        "extensions": ["xap"]
    },
    "application/x-sql": {
        "source": "apache",
        "extensions": ["sql"]
    },
    "application/x-stuffit": {
        "source": "apache",
        "compressible": false,
        "extensions": ["sit"]
    },
    "application/x-stuffitx": {
        "source": "apache",
        "extensions": ["sitx"]
    },
    "application/x-subrip": {
        "source": "apache",
        "extensions": ["srt"]
    },
    "application/x-sv4cpio": {
        "source": "apache",
        "extensions": ["sv4cpio"]
    },
    "application/x-sv4crc": {
        "source": "apache",
        "extensions": ["sv4crc"]
    },
    "application/x-t3vm-image": {
        "source": "apache",
        "extensions": ["t3"]
    },
    "application/x-tads": {
        "source": "apache",
        "extensions": ["gam"]
    },
    "application/x-tar": {
        "source": "apache",
        "compressible": true,
        "extensions": ["tar"]
    },
    "application/x-tcl": {
        "source": "apache",
        "extensions": ["tcl", "tk"]
    },
    "application/x-tex": {
        "source": "apache",
        "extensions": ["tex"]
    },
    "application/x-tex-tfm": {
        "source": "apache",
        "extensions": ["tfm"]
    },
    "application/x-texinfo": {
        "source": "apache",
        "extensions": ["texinfo", "texi"]
    },
    "application/x-tgif": {
        "source": "apache",
        "extensions": ["obj"]
    },
    "application/x-ustar": {
        "source": "apache",
        "extensions": ["ustar"]
    },
    "application/x-virtualbox-hdd": {
        "compressible": true,
        "extensions": ["hdd"]
    },
    "application/x-virtualbox-ova": {
        "compressible": true,
        "extensions": ["ova"]
    },
    "application/x-virtualbox-ovf": {
        "compressible": true,
        "extensions": ["ovf"]
    },
    "application/x-virtualbox-vbox": {
        "compressible": true,
        "extensions": ["vbox"]
    },
    "application/x-virtualbox-vbox-extpack": {
        "compressible": false,
        "extensions": ["vbox-extpack"]
    },
    "application/x-virtualbox-vdi": {
        "compressible": true,
        "extensions": ["vdi"]
    },
    "application/x-virtualbox-vhd": {
        "compressible": true,
        "extensions": ["vhd"]
    },
    "application/x-virtualbox-vmdk": {
        "compressible": true,
        "extensions": ["vmdk"]
    },
    "application/x-wais-source": {
        "source": "apache",
        "extensions": ["src"]
    },
    "application/x-web-app-manifest+json": {
        "compressible": true,
        "extensions": ["webapp"]
    },
    "application/x-www-form-urlencoded": {
        "source": "iana",
        "compressible": true
    },
    "application/x-x509-ca-cert": {
        "source": "apache",
        "extensions": ["der", "crt", "pem"]
    },
    "application/x-xfig": {
        "source": "apache",
        "extensions": ["fig"]
    },
    "application/x-xliff+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["xlf"]
    },
    "application/x-xpinstall": {
        "source": "apache",
        "compressible": false,
        "extensions": ["xpi"]
    },
    "application/x-xz": {
        "source": "apache",
        "extensions": ["xz"]
    },
    "application/x-zmachine": {
        "source": "apache",
        "extensions": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]
    },
    "application/x400-bp": {
        "source": "iana"
    },
    "application/xacml+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/xaml+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["xaml"]
    },
    "application/xcap-att+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/xcap-caps+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/xcap-diff+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xdf"]
    },
    "application/xcap-el+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/xcap-error+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/xcap-ns+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/xcon-conference-info+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/xcon-conference-info-diff+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/xenc+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xenc"]
    },
    "application/xhtml+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xhtml", "xht"]
    },
    "application/xhtml-voice+xml": {
        "source": "apache",
        "compressible": true
    },
    "application/xliff+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xml", "xsl", "xsd", "rng"]
    },
    "application/xml-dtd": {
        "source": "iana",
        "compressible": true,
        "extensions": ["dtd"]
    },
    "application/xml-external-parsed-entity": {
        "source": "iana"
    },
    "application/xml-patch+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/xmpp+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/xop+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xop"]
    },
    "application/xproc+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["xpl"]
    },
    "application/xslt+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xslt"]
    },
    "application/xspf+xml": {
        "source": "apache",
        "compressible": true,
        "extensions": ["xspf"]
    },
    "application/xv+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["mxml", "xhvml", "xvml", "xvm"]
    },
    "application/yang": {
        "source": "iana",
        "extensions": ["yang"]
    },
    "application/yang-data+json": {
        "source": "iana",
        "compressible": true
    },
    "application/yang-data+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/yang-patch+json": {
        "source": "iana",
        "compressible": true
    },
    "application/yang-patch+xml": {
        "source": "iana",
        "compressible": true
    },
    "application/yin+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["yin"]
    },
    "application/zip": {
        "source": "iana",
        "compressible": false,
        "extensions": ["zip"]
    },
    "application/zlib": {
        "source": "iana"
    },
    "application/zstd": {
        "source": "iana"
    },
    "audio/1d-interleaved-parityfec": {
        "source": "iana"
    },
    "audio/32kadpcm": {
        "source": "iana"
    },
    "audio/3gpp": {
        "source": "iana",
        "compressible": false,
        "extensions": ["3gpp"]
    },
    "audio/3gpp2": {
        "source": "iana"
    },
    "audio/aac": {
        "source": "iana"
    },
    "audio/ac3": {
        "source": "iana"
    },
    "audio/adpcm": {
        "source": "apache",
        "extensions": ["adp"]
    },
    "audio/amr": {
        "source": "iana"
    },
    "audio/amr-wb": {
        "source": "iana"
    },
    "audio/amr-wb+": {
        "source": "iana"
    },
    "audio/aptx": {
        "source": "iana"
    },
    "audio/asc": {
        "source": "iana"
    },
    "audio/atrac-advanced-lossless": {
        "source": "iana"
    },
    "audio/atrac-x": {
        "source": "iana"
    },
    "audio/atrac3": {
        "source": "iana"
    },
    "audio/basic": {
        "source": "iana",
        "compressible": false,
        "extensions": ["au", "snd"]
    },
    "audio/bv16": {
        "source": "iana"
    },
    "audio/bv32": {
        "source": "iana"
    },
    "audio/clearmode": {
        "source": "iana"
    },
    "audio/cn": {
        "source": "iana"
    },
    "audio/dat12": {
        "source": "iana"
    },
    "audio/dls": {
        "source": "iana"
    },
    "audio/dsr-es201108": {
        "source": "iana"
    },
    "audio/dsr-es202050": {
        "source": "iana"
    },
    "audio/dsr-es202211": {
        "source": "iana"
    },
    "audio/dsr-es202212": {
        "source": "iana"
    },
    "audio/dv": {
        "source": "iana"
    },
    "audio/dvi4": {
        "source": "iana"
    },
    "audio/eac3": {
        "source": "iana"
    },
    "audio/encaprtp": {
        "source": "iana"
    },
    "audio/evrc": {
        "source": "iana"
    },
    "audio/evrc-qcp": {
        "source": "iana"
    },
    "audio/evrc0": {
        "source": "iana"
    },
    "audio/evrc1": {
        "source": "iana"
    },
    "audio/evrcb": {
        "source": "iana"
    },
    "audio/evrcb0": {
        "source": "iana"
    },
    "audio/evrcb1": {
        "source": "iana"
    },
    "audio/evrcnw": {
        "source": "iana"
    },
    "audio/evrcnw0": {
        "source": "iana"
    },
    "audio/evrcnw1": {
        "source": "iana"
    },
    "audio/evrcwb": {
        "source": "iana"
    },
    "audio/evrcwb0": {
        "source": "iana"
    },
    "audio/evrcwb1": {
        "source": "iana"
    },
    "audio/evs": {
        "source": "iana"
    },
    "audio/fwdred": {
        "source": "iana"
    },
    "audio/g711-0": {
        "source": "iana"
    },
    "audio/g719": {
        "source": "iana"
    },
    "audio/g722": {
        "source": "iana"
    },
    "audio/g7221": {
        "source": "iana"
    },
    "audio/g723": {
        "source": "iana"
    },
    "audio/g726-16": {
        "source": "iana"
    },
    "audio/g726-24": {
        "source": "iana"
    },
    "audio/g726-32": {
        "source": "iana"
    },
    "audio/g726-40": {
        "source": "iana"
    },
    "audio/g728": {
        "source": "iana"
    },
    "audio/g729": {
        "source": "iana"
    },
    "audio/g7291": {
        "source": "iana"
    },
    "audio/g729d": {
        "source": "iana"
    },
    "audio/g729e": {
        "source": "iana"
    },
    "audio/gsm": {
        "source": "iana"
    },
    "audio/gsm-efr": {
        "source": "iana"
    },
    "audio/gsm-hr-08": {
        "source": "iana"
    },
    "audio/ilbc": {
        "source": "iana"
    },
    "audio/ip-mr_v2.5": {
        "source": "iana"
    },
    "audio/isac": {
        "source": "apache"
    },
    "audio/l16": {
        "source": "iana"
    },
    "audio/l20": {
        "source": "iana"
    },
    "audio/l24": {
        "source": "iana",
        "compressible": false
    },
    "audio/l8": {
        "source": "iana"
    },
    "audio/lpc": {
        "source": "iana"
    },
    "audio/melp": {
        "source": "iana"
    },
    "audio/melp1200": {
        "source": "iana"
    },
    "audio/melp2400": {
        "source": "iana"
    },
    "audio/melp600": {
        "source": "iana"
    },
    "audio/midi": {
        "source": "apache",
        "extensions": ["mid", "midi", "kar", "rmi"]
    },
    "audio/mobile-xmf": {
        "source": "iana"
    },
    "audio/mp3": {
        "compressible": false,
        "extensions": ["mp3"]
    },
    "audio/mp4": {
        "source": "iana",
        "compressible": false,
        "extensions": ["m4a", "mp4a"]
    },
    "audio/mp4a-latm": {
        "source": "iana"
    },
    "audio/mpa": {
        "source": "iana"
    },
    "audio/mpa-robust": {
        "source": "iana"
    },
    "audio/mpeg": {
        "source": "iana",
        "compressible": false,
        "extensions": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
    },
    "audio/mpeg4-generic": {
        "source": "iana"
    },
    "audio/musepack": {
        "source": "apache"
    },
    "audio/ogg": {
        "source": "iana",
        "compressible": false,
        "extensions": ["oga", "ogg", "spx"]
    },
    "audio/opus": {
        "source": "iana"
    },
    "audio/parityfec": {
        "source": "iana"
    },
    "audio/pcma": {
        "source": "iana"
    },
    "audio/pcma-wb": {
        "source": "iana"
    },
    "audio/pcmu": {
        "source": "iana"
    },
    "audio/pcmu-wb": {
        "source": "iana"
    },
    "audio/prs.sid": {
        "source": "iana"
    },
    "audio/qcelp": {
        "source": "iana"
    },
    "audio/raptorfec": {
        "source": "iana"
    },
    "audio/red": {
        "source": "iana"
    },
    "audio/rtp-enc-aescm128": {
        "source": "iana"
    },
    "audio/rtp-midi": {
        "source": "iana"
    },
    "audio/rtploopback": {
        "source": "iana"
    },
    "audio/rtx": {
        "source": "iana"
    },
    "audio/s3m": {
        "source": "apache",
        "extensions": ["s3m"]
    },
    "audio/silk": {
        "source": "apache",
        "extensions": ["sil"]
    },
    "audio/smv": {
        "source": "iana"
    },
    "audio/smv-qcp": {
        "source": "iana"
    },
    "audio/smv0": {
        "source": "iana"
    },
    "audio/sp-midi": {
        "source": "iana"
    },
    "audio/speex": {
        "source": "iana"
    },
    "audio/t140c": {
        "source": "iana"
    },
    "audio/t38": {
        "source": "iana"
    },
    "audio/telephone-event": {
        "source": "iana"
    },
    "audio/tetra_acelp": {
        "source": "iana"
    },
    "audio/tone": {
        "source": "iana"
    },
    "audio/uemclip": {
        "source": "iana"
    },
    "audio/ulpfec": {
        "source": "iana"
    },
    "audio/usac": {
        "source": "iana"
    },
    "audio/vdvi": {
        "source": "iana"
    },
    "audio/vmr-wb": {
        "source": "iana"
    },
    "audio/vnd.3gpp.iufp": {
        "source": "iana"
    },
    "audio/vnd.4sb": {
        "source": "iana"
    },
    "audio/vnd.audiokoz": {
        "source": "iana"
    },
    "audio/vnd.celp": {
        "source": "iana"
    },
    "audio/vnd.cisco.nse": {
        "source": "iana"
    },
    "audio/vnd.cmles.radio-events": {
        "source": "iana"
    },
    "audio/vnd.cns.anp1": {
        "source": "iana"
    },
    "audio/vnd.cns.inf1": {
        "source": "iana"
    },
    "audio/vnd.dece.audio": {
        "source": "iana",
        "extensions": ["uva", "uvva"]
    },
    "audio/vnd.digital-winds": {
        "source": "iana",
        "extensions": ["eol"]
    },
    "audio/vnd.dlna.adts": {
        "source": "iana"
    },
    "audio/vnd.dolby.heaac.1": {
        "source": "iana"
    },
    "audio/vnd.dolby.heaac.2": {
        "source": "iana"
    },
    "audio/vnd.dolby.mlp": {
        "source": "iana"
    },
    "audio/vnd.dolby.mps": {
        "source": "iana"
    },
    "audio/vnd.dolby.pl2": {
        "source": "iana"
    },
    "audio/vnd.dolby.pl2x": {
        "source": "iana"
    },
    "audio/vnd.dolby.pl2z": {
        "source": "iana"
    },
    "audio/vnd.dolby.pulse.1": {
        "source": "iana"
    },
    "audio/vnd.dra": {
        "source": "iana",
        "extensions": ["dra"]
    },
    "audio/vnd.dts": {
        "source": "iana",
        "extensions": ["dts"]
    },
    "audio/vnd.dts.hd": {
        "source": "iana",
        "extensions": ["dtshd"]
    },
    "audio/vnd.dts.uhd": {
        "source": "iana"
    },
    "audio/vnd.dvb.file": {
        "source": "iana"
    },
    "audio/vnd.everad.plj": {
        "source": "iana"
    },
    "audio/vnd.hns.audio": {
        "source": "iana"
    },
    "audio/vnd.lucent.voice": {
        "source": "iana",
        "extensions": ["lvp"]
    },
    "audio/vnd.ms-playready.media.pya": {
        "source": "iana",
        "extensions": ["pya"]
    },
    "audio/vnd.nokia.mobile-xmf": {
        "source": "iana"
    },
    "audio/vnd.nortel.vbk": {
        "source": "iana"
    },
    "audio/vnd.nuera.ecelp4800": {
        "source": "iana",
        "extensions": ["ecelp4800"]
    },
    "audio/vnd.nuera.ecelp7470": {
        "source": "iana",
        "extensions": ["ecelp7470"]
    },
    "audio/vnd.nuera.ecelp9600": {
        "source": "iana",
        "extensions": ["ecelp9600"]
    },
    "audio/vnd.octel.sbc": {
        "source": "iana"
    },
    "audio/vnd.presonus.multitrack": {
        "source": "iana"
    },
    "audio/vnd.qcelp": {
        "source": "iana"
    },
    "audio/vnd.rhetorex.32kadpcm": {
        "source": "iana"
    },
    "audio/vnd.rip": {
        "source": "iana",
        "extensions": ["rip"]
    },
    "audio/vnd.rn-realaudio": {
        "compressible": false
    },
    "audio/vnd.sealedmedia.softseal.mpeg": {
        "source": "iana"
    },
    "audio/vnd.vmx.cvsd": {
        "source": "iana"
    },
    "audio/vnd.wave": {
        "compressible": false
    },
    "audio/vorbis": {
        "source": "iana",
        "compressible": false
    },
    "audio/vorbis-config": {
        "source": "iana"
    },
    "audio/wav": {
        "compressible": false,
        "extensions": ["wav"]
    },
    "audio/wave": {
        "compressible": false,
        "extensions": ["wav"]
    },
    "audio/webm": {
        "source": "apache",
        "compressible": false,
        "extensions": ["weba"]
    },
    "audio/x-aac": {
        "source": "apache",
        "compressible": false,
        "extensions": ["aac"]
    },
    "audio/x-aiff": {
        "source": "apache",
        "extensions": ["aif", "aiff", "aifc"]
    },
    "audio/x-caf": {
        "source": "apache",
        "compressible": false,
        "extensions": ["caf"]
    },
    "audio/x-flac": {
        "source": "apache",
        "extensions": ["flac"]
    },
    "audio/x-m4a": {
        "source": "nginx",
        "extensions": ["m4a"]
    },
    "audio/x-matroska": {
        "source": "apache",
        "extensions": ["mka"]
    },
    "audio/x-mpegurl": {
        "source": "apache",
        "extensions": ["m3u"]
    },
    "audio/x-ms-wax": {
        "source": "apache",
        "extensions": ["wax"]
    },
    "audio/x-ms-wma": {
        "source": "apache",
        "extensions": ["wma"]
    },
    "audio/x-pn-realaudio": {
        "source": "apache",
        "extensions": ["ram", "ra"]
    },
    "audio/x-pn-realaudio-plugin": {
        "source": "apache",
        "extensions": ["rmp"]
    },
    "audio/x-realaudio": {
        "source": "nginx",
        "extensions": ["ra"]
    },
    "audio/x-tta": {
        "source": "apache"
    },
    "audio/x-wav": {
        "source": "apache",
        "extensions": ["wav"]
    },
    "audio/xm": {
        "source": "apache",
        "extensions": ["xm"]
    },
    "chemical/x-cdx": {
        "source": "apache",
        "extensions": ["cdx"]
    },
    "chemical/x-cif": {
        "source": "apache",
        "extensions": ["cif"]
    },
    "chemical/x-cmdf": {
        "source": "apache",
        "extensions": ["cmdf"]
    },
    "chemical/x-cml": {
        "source": "apache",
        "extensions": ["cml"]
    },
    "chemical/x-csml": {
        "source": "apache",
        "extensions": ["csml"]
    },
    "chemical/x-pdb": {
        "source": "apache"
    },
    "chemical/x-xyz": {
        "source": "apache",
        "extensions": ["xyz"]
    },
    "font/collection": {
        "source": "iana",
        "extensions": ["ttc"]
    },
    "font/otf": {
        "source": "iana",
        "compressible": true,
        "extensions": ["otf"]
    },
    "font/sfnt": {
        "source": "iana"
    },
    "font/ttf": {
        "source": "iana",
        "extensions": ["ttf"]
    },
    "font/woff": {
        "source": "iana",
        "extensions": ["woff"]
    },
    "font/woff2": {
        "source": "iana",
        "extensions": ["woff2"]
    },
    "image/aces": {
        "source": "iana",
        "extensions": ["exr"]
    },
    "image/apng": {
        "compressible": false,
        "extensions": ["apng"]
    },
    "image/avci": {
        "source": "iana"
    },
    "image/avcs": {
        "source": "iana"
    },
    "image/bmp": {
        "source": "iana",
        "compressible": true,
        "extensions": ["bmp"]
    },
    "image/cgm": {
        "source": "iana",
        "extensions": ["cgm"]
    },
    "image/dicom-rle": {
        "source": "iana",
        "extensions": ["drle"]
    },
    "image/emf": {
        "source": "iana",
        "extensions": ["emf"]
    },
    "image/fits": {
        "source": "iana",
        "extensions": ["fits"]
    },
    "image/g3fax": {
        "source": "iana",
        "extensions": ["g3"]
    },
    "image/gif": {
        "source": "iana",
        "compressible": false,
        "extensions": ["gif"]
    },
    "image/heic": {
        "source": "iana",
        "extensions": ["heic"]
    },
    "image/heic-sequence": {
        "source": "iana",
        "extensions": ["heics"]
    },
    "image/heif": {
        "source": "iana",
        "extensions": ["heif"]
    },
    "image/heif-sequence": {
        "source": "iana",
        "extensions": ["heifs"]
    },
    "image/ief": {
        "source": "iana",
        "extensions": ["ief"]
    },
    "image/jls": {
        "source": "iana",
        "extensions": ["jls"]
    },
    "image/jp2": {
        "source": "iana",
        "compressible": false,
        "extensions": ["jp2", "jpg2"]
    },
    "image/jpeg": {
        "source": "iana",
        "compressible": false,
        "extensions": ["jpeg", "jpg", "jpe"]
    },
    "image/jpm": {
        "source": "iana",
        "compressible": false,
        "extensions": ["jpm"]
    },
    "image/jpx": {
        "source": "iana",
        "compressible": false,
        "extensions": ["jpx", "jpf"]
    },
    "image/ktx": {
        "source": "iana",
        "extensions": ["ktx"]
    },
    "image/naplps": {
        "source": "iana"
    },
    "image/pjpeg": {
        "compressible": false
    },
    "image/png": {
        "source": "iana",
        "compressible": false,
        "extensions": ["png"]
    },
    "image/prs.btif": {
        "source": "iana",
        "extensions": ["btif"]
    },
    "image/prs.pti": {
        "source": "iana",
        "extensions": ["pti"]
    },
    "image/pwg-raster": {
        "source": "iana"
    },
    "image/sgi": {
        "source": "apache",
        "extensions": ["sgi"]
    },
    "image/svg+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["svg", "svgz"]
    },
    "image/t38": {
        "source": "iana",
        "extensions": ["t38"]
    },
    "image/tiff": {
        "source": "iana",
        "compressible": false,
        "extensions": ["tif", "tiff"]
    },
    "image/tiff-fx": {
        "source": "iana",
        "extensions": ["tfx"]
    },
    "image/vnd.adobe.photoshop": {
        "source": "iana",
        "compressible": true,
        "extensions": ["psd"]
    },
    "image/vnd.airzip.accelerator.azv": {
        "source": "iana",
        "extensions": ["azv"]
    },
    "image/vnd.cns.inf2": {
        "source": "iana"
    },
    "image/vnd.dece.graphic": {
        "source": "iana",
        "extensions": ["uvi", "uvvi", "uvg", "uvvg"]
    },
    "image/vnd.djvu": {
        "source": "iana",
        "extensions": ["djvu", "djv"]
    },
    "image/vnd.dvb.subtitle": {
        "source": "iana",
        "extensions": ["sub"]
    },
    "image/vnd.dwg": {
        "source": "iana",
        "extensions": ["dwg"]
    },
    "image/vnd.dxf": {
        "source": "iana",
        "extensions": ["dxf"]
    },
    "image/vnd.fastbidsheet": {
        "source": "iana",
        "extensions": ["fbs"]
    },
    "image/vnd.fpx": {
        "source": "iana",
        "extensions": ["fpx"]
    },
    "image/vnd.fst": {
        "source": "iana",
        "extensions": ["fst"]
    },
    "image/vnd.fujixerox.edmics-mmr": {
        "source": "iana",
        "extensions": ["mmr"]
    },
    "image/vnd.fujixerox.edmics-rlc": {
        "source": "iana",
        "extensions": ["rlc"]
    },
    "image/vnd.globalgraphics.pgb": {
        "source": "iana"
    },
    "image/vnd.microsoft.icon": {
        "source": "iana",
        "extensions": ["ico"]
    },
    "image/vnd.mix": {
        "source": "iana"
    },
    "image/vnd.mozilla.apng": {
        "source": "iana"
    },
    "image/vnd.ms-modi": {
        "source": "iana",
        "extensions": ["mdi"]
    },
    "image/vnd.ms-photo": {
        "source": "apache",
        "extensions": ["wdp"]
    },
    "image/vnd.net-fpx": {
        "source": "iana",
        "extensions": ["npx"]
    },
    "image/vnd.radiance": {
        "source": "iana"
    },
    "image/vnd.sealed.png": {
        "source": "iana"
    },
    "image/vnd.sealedmedia.softseal.gif": {
        "source": "iana"
    },
    "image/vnd.sealedmedia.softseal.jpg": {
        "source": "iana"
    },
    "image/vnd.svf": {
        "source": "iana"
    },
    "image/vnd.tencent.tap": {
        "source": "iana",
        "extensions": ["tap"]
    },
    "image/vnd.valve.source.texture": {
        "source": "iana",
        "extensions": ["vtf"]
    },
    "image/vnd.wap.wbmp": {
        "source": "iana",
        "extensions": ["wbmp"]
    },
    "image/vnd.xiff": {
        "source": "iana",
        "extensions": ["xif"]
    },
    "image/vnd.zbrush.pcx": {
        "source": "iana",
        "extensions": ["pcx"]
    },
    "image/webp": {
        "source": "apache",
        "extensions": ["webp"]
    },
    "image/wmf": {
        "source": "iana",
        "extensions": ["wmf"]
    },
    "image/x-3ds": {
        "source": "apache",
        "extensions": ["3ds"]
    },
    "image/x-cmu-raster": {
        "source": "apache",
        "extensions": ["ras"]
    },
    "image/x-cmx": {
        "source": "apache",
        "extensions": ["cmx"]
    },
    "image/x-freehand": {
        "source": "apache",
        "extensions": ["fh", "fhc", "fh4", "fh5", "fh7"]
    },
    "image/x-icon": {
        "source": "apache",
        "compressible": true,
        "extensions": ["ico"]
    },
    "image/x-jng": {
        "source": "nginx",
        "extensions": ["jng"]
    },
    "image/x-mrsid-image": {
        "source": "apache",
        "extensions": ["sid"]
    },
    "image/x-ms-bmp": {
        "source": "nginx",
        "compressible": true,
        "extensions": ["bmp"]
    },
    "image/x-pcx": {
        "source": "apache",
        "extensions": ["pcx"]
    },
    "image/x-pict": {
        "source": "apache",
        "extensions": ["pic", "pct"]
    },
    "image/x-portable-anymap": {
        "source": "apache",
        "extensions": ["pnm"]
    },
    "image/x-portable-bitmap": {
        "source": "apache",
        "extensions": ["pbm"]
    },
    "image/x-portable-graymap": {
        "source": "apache",
        "extensions": ["pgm"]
    },
    "image/x-portable-pixmap": {
        "source": "apache",
        "extensions": ["ppm"]
    },
    "image/x-rgb": {
        "source": "apache",
        "extensions": ["rgb"]
    },
    "image/x-tga": {
        "source": "apache",
        "extensions": ["tga"]
    },
    "image/x-xbitmap": {
        "source": "apache",
        "extensions": ["xbm"]
    },
    "image/x-xcf": {
        "compressible": false
    },
    "image/x-xpixmap": {
        "source": "apache",
        "extensions": ["xpm"]
    },
    "image/x-xwindowdump": {
        "source": "apache",
        "extensions": ["xwd"]
    },
    "message/cpim": {
        "source": "iana"
    },
    "message/delivery-status": {
        "source": "iana"
    },
    "message/disposition-notification": {
        "source": "iana",
        "extensions": ["disposition-notification"]
    },
    "message/external-body": {
        "source": "iana"
    },
    "message/feedback-report": {
        "source": "iana"
    },
    "message/global": {
        "source": "iana",
        "extensions": ["u8msg"]
    },
    "message/global-delivery-status": {
        "source": "iana",
        "extensions": ["u8dsn"]
    },
    "message/global-disposition-notification": {
        "source": "iana",
        "extensions": ["u8mdn"]
    },
    "message/global-headers": {
        "source": "iana",
        "extensions": ["u8hdr"]
    },
    "message/http": {
        "source": "iana",
        "compressible": false
    },
    "message/imdn+xml": {
        "source": "iana",
        "compressible": true
    },
    "message/news": {
        "source": "iana"
    },
    "message/partial": {
        "source": "iana",
        "compressible": false
    },
    "message/rfc822": {
        "source": "iana",
        "compressible": true,
        "extensions": ["eml", "mime"]
    },
    "message/s-http": {
        "source": "iana"
    },
    "message/sip": {
        "source": "iana"
    },
    "message/sipfrag": {
        "source": "iana"
    },
    "message/tracking-status": {
        "source": "iana"
    },
    "message/vnd.si.simp": {
        "source": "iana"
    },
    "message/vnd.wfa.wsc": {
        "source": "iana",
        "extensions": ["wsc"]
    },
    "model/3mf": {
        "source": "iana"
    },
    "model/gltf+json": {
        "source": "iana",
        "compressible": true,
        "extensions": ["gltf"]
    },
    "model/gltf-binary": {
        "source": "iana",
        "compressible": true,
        "extensions": ["glb"]
    },
    "model/iges": {
        "source": "iana",
        "compressible": false,
        "extensions": ["igs", "iges"]
    },
    "model/mesh": {
        "source": "iana",
        "compressible": false,
        "extensions": ["msh", "mesh", "silo"]
    },
    "model/stl": {
        "source": "iana"
    },
    "model/vnd.collada+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["dae"]
    },
    "model/vnd.dwf": {
        "source": "iana",
        "extensions": ["dwf"]
    },
    "model/vnd.flatland.3dml": {
        "source": "iana"
    },
    "model/vnd.gdl": {
        "source": "iana",
        "extensions": ["gdl"]
    },
    "model/vnd.gs-gdl": {
        "source": "apache"
    },
    "model/vnd.gs.gdl": {
        "source": "iana"
    },
    "model/vnd.gtw": {
        "source": "iana",
        "extensions": ["gtw"]
    },
    "model/vnd.moml+xml": {
        "source": "iana",
        "compressible": true
    },
    "model/vnd.mts": {
        "source": "iana",
        "extensions": ["mts"]
    },
    "model/vnd.opengex": {
        "source": "iana"
    },
    "model/vnd.parasolid.transmit.binary": {
        "source": "iana"
    },
    "model/vnd.parasolid.transmit.text": {
        "source": "iana"
    },
    "model/vnd.rosette.annotated-data-model": {
        "source": "iana"
    },
    "model/vnd.usdz+zip": {
        "source": "iana",
        "compressible": false
    },
    "model/vnd.valve.source.compiled-map": {
        "source": "iana"
    },
    "model/vnd.vtu": {
        "source": "iana",
        "extensions": ["vtu"]
    },
    "model/vrml": {
        "source": "iana",
        "compressible": false,
        "extensions": ["wrl", "vrml"]
    },
    "model/x3d+binary": {
        "source": "apache",
        "compressible": false,
        "extensions": ["x3db", "x3dbz"]
    },
    "model/x3d+fastinfoset": {
        "source": "iana"
    },
    "model/x3d+vrml": {
        "source": "apache",
        "compressible": false,
        "extensions": ["x3dv", "x3dvz"]
    },
    "model/x3d+xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["x3d", "x3dz"]
    },
    "model/x3d-vrml": {
        "source": "iana"
    },
    "multipart/alternative": {
        "source": "iana",
        "compressible": false
    },
    "multipart/appledouble": {
        "source": "iana"
    },
    "multipart/byteranges": {
        "source": "iana"
    },
    "multipart/digest": {
        "source": "iana"
    },
    "multipart/encrypted": {
        "source": "iana",
        "compressible": false
    },
    "multipart/form-data": {
        "source": "iana",
        "compressible": false
    },
    "multipart/header-set": {
        "source": "iana"
    },
    "multipart/mixed": {
        "source": "iana",
        "compressible": false
    },
    "multipart/multilingual": {
        "source": "iana"
    },
    "multipart/parallel": {
        "source": "iana"
    },
    "multipart/related": {
        "source": "iana",
        "compressible": false
    },
    "multipart/report": {
        "source": "iana"
    },
    "multipart/signed": {
        "source": "iana",
        "compressible": false
    },
    "multipart/vnd.bint.med-plus": {
        "source": "iana"
    },
    "multipart/voice-message": {
        "source": "iana"
    },
    "multipart/x-mixed-replace": {
        "source": "iana"
    },
    "text/1d-interleaved-parityfec": {
        "source": "iana"
    },
    "text/cache-manifest": {
        "source": "iana",
        "compressible": true,
        "extensions": ["appcache", "manifest"]
    },
    "text/calendar": {
        "source": "iana",
        "extensions": ["ics", "ifb"]
    },
    "text/calender": {
        "compressible": true
    },
    "text/cmd": {
        "compressible": true
    },
    "text/coffeescript": {
        "extensions": ["coffee", "litcoffee"]
    },
    "text/css": {
        "source": "iana",
        "charset": "UTF-8",
        "compressible": true,
        "extensions": ["css"]
    },
    "text/csv": {
        "source": "iana",
        "compressible": true,
        "extensions": ["csv"]
    },
    "text/csv-schema": {
        "source": "iana"
    },
    "text/directory": {
        "source": "iana"
    },
    "text/dns": {
        "source": "iana"
    },
    "text/ecmascript": {
        "source": "iana"
    },
    "text/encaprtp": {
        "source": "iana"
    },
    "text/enriched": {
        "source": "iana"
    },
    "text/fwdred": {
        "source": "iana"
    },
    "text/grammar-ref-list": {
        "source": "iana"
    },
    "text/html": {
        "source": "iana",
        "compressible": true,
        "extensions": ["html", "htm", "shtml"]
    },
    "text/jade": {
        "extensions": ["jade"]
    },
    "text/javascript": {
        "source": "iana",
        "compressible": true
    },
    "text/jcr-cnd": {
        "source": "iana"
    },
    "text/jsx": {
        "compressible": true,
        "extensions": ["jsx"]
    },
    "text/less": {
        "compressible": true,
        "extensions": ["less"]
    },
    "text/markdown": {
        "source": "iana",
        "compressible": true,
        "extensions": ["markdown", "md"]
    },
    "text/mathml": {
        "source": "nginx",
        "extensions": ["mml"]
    },
    "text/mizar": {
        "source": "iana"
    },
    "text/n3": {
        "source": "iana",
        "compressible": true,
        "extensions": ["n3"]
    },
    "text/parameters": {
        "source": "iana"
    },
    "text/parityfec": {
        "source": "iana"
    },
    "text/plain": {
        "source": "iana",
        "compressible": true,
        "extensions": ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
    },
    "text/provenance-notation": {
        "source": "iana"
    },
    "text/prs.fallenstein.rst": {
        "source": "iana"
    },
    "text/prs.lines.tag": {
        "source": "iana",
        "extensions": ["dsc"]
    },
    "text/prs.prop.logic": {
        "source": "iana"
    },
    "text/raptorfec": {
        "source": "iana"
    },
    "text/red": {
        "source": "iana"
    },
    "text/rfc822-headers": {
        "source": "iana"
    },
    "text/richtext": {
        "source": "iana",
        "compressible": true,
        "extensions": ["rtx"]
    },
    "text/rtf": {
        "source": "iana",
        "compressible": true,
        "extensions": ["rtf"]
    },
    "text/rtp-enc-aescm128": {
        "source": "iana"
    },
    "text/rtploopback": {
        "source": "iana"
    },
    "text/rtx": {
        "source": "iana"
    },
    "text/sgml": {
        "source": "iana",
        "extensions": ["sgml", "sgm"]
    },
    "text/shex": {
        "extensions": ["shex"]
    },
    "text/slim": {
        "extensions": ["slim", "slm"]
    },
    "text/strings": {
        "source": "iana"
    },
    "text/stylus": {
        "extensions": ["stylus", "styl"]
    },
    "text/t140": {
        "source": "iana"
    },
    "text/tab-separated-values": {
        "source": "iana",
        "compressible": true,
        "extensions": ["tsv"]
    },
    "text/troff": {
        "source": "iana",
        "extensions": ["t", "tr", "roff", "man", "me", "ms"]
    },
    "text/turtle": {
        "source": "iana",
        "charset": "UTF-8",
        "extensions": ["ttl"]
    },
    "text/ulpfec": {
        "source": "iana"
    },
    "text/uri-list": {
        "source": "iana",
        "compressible": true,
        "extensions": ["uri", "uris", "urls"]
    },
    "text/vcard": {
        "source": "iana",
        "compressible": true,
        "extensions": ["vcard"]
    },
    "text/vnd.a": {
        "source": "iana"
    },
    "text/vnd.abc": {
        "source": "iana"
    },
    "text/vnd.ascii-art": {
        "source": "iana"
    },
    "text/vnd.curl": {
        "source": "iana",
        "extensions": ["curl"]
    },
    "text/vnd.curl.dcurl": {
        "source": "apache",
        "extensions": ["dcurl"]
    },
    "text/vnd.curl.mcurl": {
        "source": "apache",
        "extensions": ["mcurl"]
    },
    "text/vnd.curl.scurl": {
        "source": "apache",
        "extensions": ["scurl"]
    },
    "text/vnd.debian.copyright": {
        "source": "iana"
    },
    "text/vnd.dmclientscript": {
        "source": "iana"
    },
    "text/vnd.dvb.subtitle": {
        "source": "iana",
        "extensions": ["sub"]
    },
    "text/vnd.esmertec.theme-descriptor": {
        "source": "iana"
    },
    "text/vnd.fly": {
        "source": "iana",
        "extensions": ["fly"]
    },
    "text/vnd.fmi.flexstor": {
        "source": "iana",
        "extensions": ["flx"]
    },
    "text/vnd.gml": {
        "source": "iana"
    },
    "text/vnd.graphviz": {
        "source": "iana",
        "extensions": ["gv"]
    },
    "text/vnd.hgl": {
        "source": "iana"
    },
    "text/vnd.in3d.3dml": {
        "source": "iana",
        "extensions": ["3dml"]
    },
    "text/vnd.in3d.spot": {
        "source": "iana",
        "extensions": ["spot"]
    },
    "text/vnd.iptc.newsml": {
        "source": "iana"
    },
    "text/vnd.iptc.nitf": {
        "source": "iana"
    },
    "text/vnd.latex-z": {
        "source": "iana"
    },
    "text/vnd.motorola.reflex": {
        "source": "iana"
    },
    "text/vnd.ms-mediapackage": {
        "source": "iana"
    },
    "text/vnd.net2phone.commcenter.command": {
        "source": "iana"
    },
    "text/vnd.radisys.msml-basic-layout": {
        "source": "iana"
    },
    "text/vnd.senx.warpscript": {
        "source": "iana"
    },
    "text/vnd.si.uricatalogue": {
        "source": "iana"
    },
    "text/vnd.sun.j2me.app-descriptor": {
        "source": "iana",
        "extensions": ["jad"]
    },
    "text/vnd.trolltech.linguist": {
        "source": "iana"
    },
    "text/vnd.wap.si": {
        "source": "iana"
    },
    "text/vnd.wap.sl": {
        "source": "iana"
    },
    "text/vnd.wap.wml": {
        "source": "iana",
        "extensions": ["wml"]
    },
    "text/vnd.wap.wmlscript": {
        "source": "iana",
        "extensions": ["wmls"]
    },
    "text/vtt": {
        "charset": "UTF-8",
        "compressible": true,
        "extensions": ["vtt"]
    },
    "text/x-asm": {
        "source": "apache",
        "extensions": ["s", "asm"]
    },
    "text/x-c": {
        "source": "apache",
        "extensions": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]
    },
    "text/x-component": {
        "source": "nginx",
        "extensions": ["htc"]
    },
    "text/x-fortran": {
        "source": "apache",
        "extensions": ["f", "for", "f77", "f90"]
    },
    "text/x-gwt-rpc": {
        "compressible": true
    },
    "text/x-handlebars-template": {
        "extensions": ["hbs"]
    },
    "text/x-java-source": {
        "source": "apache",
        "extensions": ["java"]
    },
    "text/x-jquery-tmpl": {
        "compressible": true
    },
    "text/x-lua": {
        "extensions": ["lua"]
    },
    "text/x-markdown": {
        "compressible": true,
        "extensions": ["mkd"]
    },
    "text/x-nfo": {
        "source": "apache",
        "extensions": ["nfo"]
    },
    "text/x-opml": {
        "source": "apache",
        "extensions": ["opml"]
    },
    "text/x-org": {
        "compressible": true,
        "extensions": ["org"]
    },
    "text/x-pascal": {
        "source": "apache",
        "extensions": ["p", "pas"]
    },
    "text/x-processing": {
        "compressible": true,
        "extensions": ["pde"]
    },
    "text/x-sass": {
        "extensions": ["sass"]
    },
    "text/x-scss": {
        "extensions": ["scss"]
    },
    "text/x-setext": {
        "source": "apache",
        "extensions": ["etx"]
    },
    "text/x-sfv": {
        "source": "apache",
        "extensions": ["sfv"]
    },
    "text/x-suse-ymp": {
        "compressible": true,
        "extensions": ["ymp"]
    },
    "text/x-uuencode": {
        "source": "apache",
        "extensions": ["uu"]
    },
    "text/x-vcalendar": {
        "source": "apache",
        "extensions": ["vcs"]
    },
    "text/x-vcard": {
        "source": "apache",
        "extensions": ["vcf"]
    },
    "text/xml": {
        "source": "iana",
        "compressible": true,
        "extensions": ["xml"]
    },
    "text/xml-external-parsed-entity": {
        "source": "iana"
    },
    "text/yaml": {
        "extensions": ["yaml", "yml"]
    },
    "video/1d-interleaved-parityfec": {
        "source": "iana"
    },
    "video/3gpp": {
        "source": "iana",
        "extensions": ["3gp", "3gpp"]
    },
    "video/3gpp-tt": {
        "source": "iana"
    },
    "video/3gpp2": {
        "source": "iana",
        "extensions": ["3g2"]
    },
    "video/bmpeg": {
        "source": "iana"
    },
    "video/bt656": {
        "source": "iana"
    },
    "video/celb": {
        "source": "iana"
    },
    "video/dv": {
        "source": "iana"
    },
    "video/encaprtp": {
        "source": "iana"
    },
    "video/h261": {
        "source": "iana",
        "extensions": ["h261"]
    },
    "video/h263": {
        "source": "iana",
        "extensions": ["h263"]
    },
    "video/h263-1998": {
        "source": "iana"
    },
    "video/h263-2000": {
        "source": "iana"
    },
    "video/h264": {
        "source": "iana",
        "extensions": ["h264"]
    },
    "video/h264-rcdo": {
        "source": "iana"
    },
    "video/h264-svc": {
        "source": "iana"
    },
    "video/h265": {
        "source": "iana"
    },
    "video/iso.segment": {
        "source": "iana"
    },
    "video/jpeg": {
        "source": "iana",
        "extensions": ["jpgv"]
    },
    "video/jpeg2000": {
        "source": "iana"
    },
    "video/jpm": {
        "source": "apache",
        "extensions": ["jpm", "jpgm"]
    },
    "video/mj2": {
        "source": "iana",
        "extensions": ["mj2", "mjp2"]
    },
    "video/mp1s": {
        "source": "iana"
    },
    "video/mp2p": {
        "source": "iana"
    },
    "video/mp2t": {
        "source": "iana",
        "extensions": ["ts"]
    },
    "video/mp4": {
        "source": "iana",
        "compressible": false,
        "extensions": ["mp4", "mp4v", "mpg4"]
    },
    "video/mp4v-es": {
        "source": "iana"
    },
    "video/mpeg": {
        "source": "iana",
        "compressible": false,
        "extensions": ["mpeg", "mpg", "mpe", "m1v", "m2v"]
    },
    "video/mpeg4-generic": {
        "source": "iana"
    },
    "video/mpv": {
        "source": "iana"
    },
    "video/nv": {
        "source": "iana"
    },
    "video/ogg": {
        "source": "iana",
        "compressible": false,
        "extensions": ["ogv"]
    },
    "video/parityfec": {
        "source": "iana"
    },
    "video/pointer": {
        "source": "iana"
    },
    "video/quicktime": {
        "source": "iana",
        "compressible": false,
        "extensions": ["qt", "mov"]
    },
    "video/raptorfec": {
        "source": "iana"
    },
    "video/raw": {
        "source": "iana"
    },
    "video/rtp-enc-aescm128": {
        "source": "iana"
    },
    "video/rtploopback": {
        "source": "iana"
    },
    "video/rtx": {
        "source": "iana"
    },
    "video/smpte291": {
        "source": "iana"
    },
    "video/smpte292m": {
        "source": "iana"
    },
    "video/ulpfec": {
        "source": "iana"
    },
    "video/vc1": {
        "source": "iana"
    },
    "video/vc2": {
        "source": "iana"
    },
    "video/vnd.cctv": {
        "source": "iana"
    },
    "video/vnd.dece.hd": {
        "source": "iana",
        "extensions": ["uvh", "uvvh"]
    },
    "video/vnd.dece.mobile": {
        "source": "iana",
        "extensions": ["uvm", "uvvm"]
    },
    "video/vnd.dece.mp4": {
        "source": "iana"
    },
    "video/vnd.dece.pd": {
        "source": "iana",
        "extensions": ["uvp", "uvvp"]
    },
    "video/vnd.dece.sd": {
        "source": "iana",
        "extensions": ["uvs", "uvvs"]
    },
    "video/vnd.dece.video": {
        "source": "iana",
        "extensions": ["uvv", "uvvv"]
    },
    "video/vnd.directv.mpeg": {
        "source": "iana"
    },
    "video/vnd.directv.mpeg-tts": {
        "source": "iana"
    },
    "video/vnd.dlna.mpeg-tts": {
        "source": "iana"
    },
    "video/vnd.dvb.file": {
        "source": "iana",
        "extensions": ["dvb"]
    },
    "video/vnd.fvt": {
        "source": "iana",
        "extensions": ["fvt"]
    },
    "video/vnd.hns.video": {
        "source": "iana"
    },
    "video/vnd.iptvforum.1dparityfec-1010": {
        "source": "iana"
    },
    "video/vnd.iptvforum.1dparityfec-2005": {
        "source": "iana"
    },
    "video/vnd.iptvforum.2dparityfec-1010": {
        "source": "iana"
    },
    "video/vnd.iptvforum.2dparityfec-2005": {
        "source": "iana"
    },
    "video/vnd.iptvforum.ttsavc": {
        "source": "iana"
    },
    "video/vnd.iptvforum.ttsmpeg2": {
        "source": "iana"
    },
    "video/vnd.motorola.video": {
        "source": "iana"
    },
    "video/vnd.motorola.videop": {
        "source": "iana"
    },
    "video/vnd.mpegurl": {
        "source": "iana",
        "extensions": ["mxu", "m4u"]
    },
    "video/vnd.ms-playready.media.pyv": {
        "source": "iana",
        "extensions": ["pyv"]
    },
    "video/vnd.nokia.interleaved-multimedia": {
        "source": "iana"
    },
    "video/vnd.nokia.mp4vr": {
        "source": "iana"
    },
    "video/vnd.nokia.videovoip": {
        "source": "iana"
    },
    "video/vnd.objectvideo": {
        "source": "iana"
    },
    "video/vnd.radgamettools.bink": {
        "source": "iana"
    },
    "video/vnd.radgamettools.smacker": {
        "source": "iana"
    },
    "video/vnd.sealed.mpeg1": {
        "source": "iana"
    },
    "video/vnd.sealed.mpeg4": {
        "source": "iana"
    },
    "video/vnd.sealed.swf": {
        "source": "iana"
    },
    "video/vnd.sealedmedia.softseal.mov": {
        "source": "iana"
    },
    "video/vnd.uvvu.mp4": {
        "source": "iana",
        "extensions": ["uvu", "uvvu"]
    },
    "video/vnd.vivo": {
        "source": "iana",
        "extensions": ["viv"]
    },
    "video/vp8": {
        "source": "iana"
    },
    "video/webm": {
        "source": "apache",
        "compressible": false,
        "extensions": ["webm"]
    },
    "video/x-f4v": {
        "source": "apache",
        "extensions": ["f4v"]
    },
    "video/x-fli": {
        "source": "apache",
        "extensions": ["fli"]
    },
    "video/x-flv": {
        "source": "apache",
        "compressible": false,
        "extensions": ["flv"]
    },
    "video/x-m4v": {
        "source": "apache",
        "extensions": ["m4v"]
    },
    "video/x-matroska": {
        "source": "apache",
        "compressible": false,
        "extensions": ["mkv", "mk3d", "mks"]
    },
    "video/x-mng": {
        "source": "apache",
        "extensions": ["mng"]
    },
    "video/x-ms-asf": {
        "source": "apache",
        "extensions": ["asf", "asx"]
    },
    "video/x-ms-vob": {
        "source": "apache",
        "extensions": ["vob"]
    },
    "video/x-ms-wm": {
        "source": "apache",
        "extensions": ["wm"]
    },
    "video/x-ms-wmv": {
        "source": "apache",
        "compressible": false,
        "extensions": ["wmv"]
    },
    "video/x-ms-wmx": {
        "source": "apache",
        "extensions": ["wmx"]
    },
    "video/x-ms-wvx": {
        "source": "apache",
        "extensions": ["wvx"]
    },
    "video/x-msvideo": {
        "source": "apache",
        "extensions": ["avi"]
    },
    "video/x-sgi-movie": {
        "source": "apache",
        "extensions": ["movie"]
    },
    "video/x-smv": {
        "source": "apache",
        "extensions": ["smv"]
    },
    "x-conference/x-cooltalk": {
        "source": "apache",
        "extensions": ["ice"]
    },
    "x-shader/x-fragment": {
        "compressible": true
    },
    "x-shader/x-vertex": {
        "compressible": true
    }
});
// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
define("https://deno.land/std@v0.9.0/media_types/deps", ["require", "exports", "https://deno.land/std@v0.9.0/fs/path", "https://deno.land/std@v0.9.0/media_types/db_1.38.0"], function (require, exports, path_ts_1, db_1_38_0_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    db_1_38_0_json_1 = __importDefault(db_1_38_0_json_1);
    exports.extname = path_ts_1.extname;
    exports.db = db_1_38_0_json_1.default;
});
/*!
 * Ported from: https://github.com/jshttp/mime-types and licensed as:
 *
 * (The MIT License)
 *
 * Copyright (c) 2014 Jonathan Ong <me@jongleberry.com>
 * Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>
 * Copyright (c) 2019 the Deno authors
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
define("https://deno.land/std@v0.9.0/media_types/mod", ["require", "exports", "https://deno.land/std@v0.9.0/media_types/deps"], function (require, exports, deps_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
    const TEXT_TYPE_REGEXP = /^text\//i;
    /** A map of extensions for a given media type */
    exports.extensions = new Map();
    /** A map of the media type for a given extension */
    exports.types = new Map();
    /** Internal function to populate the maps based on the Mime DB */
    function populateMaps(extensions, types) {
        const preference = ["nginx", "apache", undefined, "iana"];
        for (const type of Object.keys(deps_ts_1.db)) {
            const mime = deps_ts_1.db[type];
            const exts = mime.extensions;
            if (!exts || !exts.length) {
                continue;
            }
            extensions.set(type, exts);
            for (const ext of exts) {
                if (types.has(ext)) {
                    const current = types.get(ext);
                    const from = preference.indexOf(deps_ts_1.db[current].source);
                    const to = preference.indexOf(mime.source);
                    if (current !== "application/octet-stream" &&
                        (from > to ||
                            (from === to && current.substr(0, 12) === "application/"))) {
                        continue;
                    }
                }
                types.set(ext, type);
            }
        }
    }
    // Populate the maps upon module load
    populateMaps(exports.extensions, exports.types);
    /** Given a media type return any default charset string.  Returns `undefined`
     * if not resolvable.
     */
    function charset(type) {
        const m = EXTRACT_TYPE_REGEXP.exec(type);
        if (!m) {
            return;
        }
        const [match] = m;
        const mime = deps_ts_1.db[match.toLowerCase()];
        if (mime && mime.charset) {
            return mime.charset;
        }
        if (TEXT_TYPE_REGEXP.test(match)) {
            return "UTF-8";
        }
    }
    exports.charset = charset;
    /** Given an extension, lookup the appropriate media type for that extension.
     * Likely you should be using `contentType()` though instead.
     */
    function lookup(path) {
        const extension = deps_ts_1.extname("x." + path)
            .toLowerCase()
            .substr(1);
        return exports.types.get(extension);
    }
    exports.lookup = lookup;
    /** Given an extension or media type, return the full `Content-Type` header
     * string.  Returns `undefined` if not resolvable.
     */
    function contentType(str) {
        let mime = str.includes("/") ? str : lookup(str);
        if (!mime) {
            return;
        }
        if (!mime.includes("charset")) {
            const cs = charset(mime);
            if (cs) {
                mime += `; charset=${cs.toLowerCase()}`;
            }
        }
        return mime;
    }
    exports.contentType = contentType;
    /** Given a media type, return the most appropriate extension or return
     * `undefined` if there is none.
     */
    function extension(type) {
        const match = EXTRACT_TYPE_REGEXP.exec(type);
        if (!match) {
            return;
        }
        const exts = exports.extensions.get(match[1].toLowerCase());
        if (!exts || !exts.length) {
            return;
        }
        return exts[0];
    }
    exports.extension = extension;
});
// Copyright 2018-2019 the oak authors. All rights reserved. MIT license.
define("https://deno.land/x/oak/deps", ["require", "exports", "https://deno.land/std@v0.9.0/http/server", "https://deno.land/std@v0.9.0/http/http_status", "https://deno.land/std@v0.9.0/fs/path/mod", "https://deno.land/std@v0.9.0/media_types/mod"], function (require, exports, server_ts_1, http_status_ts_2, mod_ts_5, mod_ts_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serve = server_ts_1.serve;
    exports.Server = server_ts_1.Server;
    exports.ServerRequest = server_ts_1.ServerRequest;
    exports.Status = http_status_ts_2.Status;
    exports.STATUS_TEXT = http_status_ts_2.STATUS_TEXT;
    exports.basename = mod_ts_5.basename;
    exports.extname = mod_ts_5.extname;
    exports.join = mod_ts_5.join;
    exports.isAbsolute = mod_ts_5.isAbsolute;
    exports.normalize = mod_ts_5.normalize;
    exports.parse = mod_ts_5.parse;
    exports.resolve = mod_ts_5.resolve;
    exports.sep = mod_ts_5.sep;
    exports.contentType = mod_ts_6.contentType;
    exports.lookup = mod_ts_6.lookup;
});
// Copyright 2018-2019 the oak authors. All rights reserved. MIT license.
define("https://deno.land/x/oak/types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ErrorStatus;
    (function (ErrorStatus) {
        ErrorStatus[ErrorStatus["BadRequest"] = 400] = "BadRequest";
        ErrorStatus[ErrorStatus["Unauthorized"] = 401] = "Unauthorized";
        ErrorStatus[ErrorStatus["PaymentRequired"] = 402] = "PaymentRequired";
        ErrorStatus[ErrorStatus["Forbidden"] = 403] = "Forbidden";
        ErrorStatus[ErrorStatus["NotFound"] = 404] = "NotFound";
        ErrorStatus[ErrorStatus["MethodNotAllowed"] = 405] = "MethodNotAllowed";
        ErrorStatus[ErrorStatus["NotAcceptable"] = 406] = "NotAcceptable";
        ErrorStatus[ErrorStatus["ProxyAuthRequired"] = 407] = "ProxyAuthRequired";
        ErrorStatus[ErrorStatus["RequestTimeout"] = 408] = "RequestTimeout";
        ErrorStatus[ErrorStatus["Conflict"] = 409] = "Conflict";
        ErrorStatus[ErrorStatus["Gone"] = 410] = "Gone";
        ErrorStatus[ErrorStatus["LengthRequired"] = 411] = "LengthRequired";
        ErrorStatus[ErrorStatus["PreconditionFailed"] = 412] = "PreconditionFailed";
        ErrorStatus[ErrorStatus["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
        ErrorStatus[ErrorStatus["RequestURITooLong"] = 414] = "RequestURITooLong";
        ErrorStatus[ErrorStatus["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
        ErrorStatus[ErrorStatus["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
        ErrorStatus[ErrorStatus["ExpectationFailed"] = 417] = "ExpectationFailed";
        ErrorStatus[ErrorStatus["Teapot"] = 418] = "Teapot";
        ErrorStatus[ErrorStatus["MisdirectedRequest"] = 421] = "MisdirectedRequest";
        ErrorStatus[ErrorStatus["UnprocessableEntity"] = 422] = "UnprocessableEntity";
        ErrorStatus[ErrorStatus["Locked"] = 423] = "Locked";
        ErrorStatus[ErrorStatus["FailedDependency"] = 424] = "FailedDependency";
        ErrorStatus[ErrorStatus["UpgradeRequired"] = 426] = "UpgradeRequired";
        ErrorStatus[ErrorStatus["PreconditionRequired"] = 428] = "PreconditionRequired";
        ErrorStatus[ErrorStatus["TooManyRequests"] = 429] = "TooManyRequests";
        ErrorStatus[ErrorStatus["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
        ErrorStatus[ErrorStatus["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
        ErrorStatus[ErrorStatus["InternalServerError"] = 500] = "InternalServerError";
        ErrorStatus[ErrorStatus["NotImplemented"] = 501] = "NotImplemented";
        ErrorStatus[ErrorStatus["BadGateway"] = 502] = "BadGateway";
        ErrorStatus[ErrorStatus["ServiceUnavailable"] = 503] = "ServiceUnavailable";
        ErrorStatus[ErrorStatus["GatewayTimeout"] = 504] = "GatewayTimeout";
        ErrorStatus[ErrorStatus["HTTPVersionNotSupported"] = 505] = "HTTPVersionNotSupported";
        ErrorStatus[ErrorStatus["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
        ErrorStatus[ErrorStatus["InsufficientStorage"] = 507] = "InsufficientStorage";
        ErrorStatus[ErrorStatus["LoopDetected"] = 508] = "LoopDetected";
        ErrorStatus[ErrorStatus["NotExtended"] = 510] = "NotExtended";
        ErrorStatus[ErrorStatus["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired"; // RFC 6585, 6
    })(ErrorStatus = exports.ErrorStatus || (exports.ErrorStatus = {}));
});
/*!
 * Adapted directly from http-errors at https://github.com/jshttp/http-errors
 * which is licensed as follows:
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Jonathan Ong me@jongleberry.com
 * Copyright (c) 2016 Douglas Christopher Wilson doug@somethingdoug.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
define("https://deno.land/x/oak/httpError", ["require", "exports", "https://deno.land/x/oak/deps", "https://deno.land/x/oak/types"], function (require, exports, deps_ts_2, types_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const errorStatusMap = new Map();
    errorStatusMap.set("BadRequest", 400);
    errorStatusMap.set("Unauthorized", 401);
    errorStatusMap.set("PaymentRequired", 402);
    errorStatusMap.set("Forbidden", 403);
    errorStatusMap.set("NotFound", 404);
    errorStatusMap.set("MethodNotAllowed", 405);
    errorStatusMap.set("NotAcceptable", 406);
    errorStatusMap.set("ProxyAuthRequired", 407);
    errorStatusMap.set("RequestTimeout", 408);
    errorStatusMap.set("Conflict", 409);
    errorStatusMap.set("Gone", 410);
    errorStatusMap.set("LengthRequired", 411);
    errorStatusMap.set("PreconditionFailed", 412);
    errorStatusMap.set("RequestEntityTooLarge", 413);
    errorStatusMap.set("RequestURITooLong", 414);
    errorStatusMap.set("UnsupportedMediaType", 415);
    errorStatusMap.set("RequestedRangeNotSatisfiable", 416);
    errorStatusMap.set("ExpectationFailed", 417);
    errorStatusMap.set("Teapot", 418);
    errorStatusMap.set("MisdirectedRequest", 421);
    errorStatusMap.set("UnprocessableEntity", 422);
    errorStatusMap.set("Locked", 423);
    errorStatusMap.set("FailedDependency", 424);
    errorStatusMap.set("UpgradeRequired", 426);
    errorStatusMap.set("PreconditionRequired", 428);
    errorStatusMap.set("TooManyRequests", 429);
    errorStatusMap.set("RequestHeaderFieldsTooLarge", 431);
    errorStatusMap.set("UnavailableForLegalReasons", 451);
    errorStatusMap.set("InternalServerError", 500);
    errorStatusMap.set("NotImplemented", 501);
    errorStatusMap.set("BadGateway", 502);
    errorStatusMap.set("ServiceUnavailable", 503);
    errorStatusMap.set("GatewayTimeout", 504);
    errorStatusMap.set("HTTPVersionNotSupported", 505);
    errorStatusMap.set("VariantAlsoNegotiates", 506);
    errorStatusMap.set("InsufficientStorage", 507);
    errorStatusMap.set("LoopDetected", 508);
    errorStatusMap.set("NotExtended", 510);
    errorStatusMap.set("NetworkAuthenticationRequired", 511);
    class HttpError extends Error {
        constructor() {
            super(...arguments);
            this.expose = false;
            this.status = types_ts_1.ErrorStatus.InternalServerError;
        }
    }
    exports.HttpError = HttpError;
    function createHttpErrorConstructor(status) {
        const name = `${types_ts_1.ErrorStatus[status]}Error`;
        const Ctor = class extends HttpError {
            constructor(message) {
                super();
                this.message = message || deps_ts_2.STATUS_TEXT.get(status);
                this.status = status;
                this.expose = status >= 400 && status < 500 ? true : false;
                Object.defineProperty(this, "name", {
                    configurable: true,
                    enumerable: false,
                    value: name,
                    writable: true
                });
            }
        };
        return Ctor;
    }
    const httpErrors = {};
    for (const [key, value] of errorStatusMap) {
        httpErrors[key] = createHttpErrorConstructor(value);
    }
    /** Create a specific class of `HttpError` based on the status, which defaults
     * to _500 Internal Server Error_.
     */
    function createHttpError(status = 500, message) {
        return new httpErrors[types_ts_1.ErrorStatus[status]](message);
    }
    exports.createHttpError = createHttpError;
    exports.default = httpErrors;
});
/*!
 * Adapted directly from negotiator at https://github.com/jshttp/negotiator/
 * which is licensed as follows:
 *
 * (The MIT License)
 *
 * Copyright (c) 2012-2014 Federico Romero
 * Copyright (c) 2012-2014 Isaac Z. Schlueter
 * Copyright (c) 2014-2015 Douglas Christopher Wilson
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
define("https://deno.land/x/oak/encoding", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
    function parseEncoding(str, i) {
        const match = simpleEncodingRegExp.exec(str);
        if (!match) {
            return undefined;
        }
        const encoding = match[1];
        let q = 1;
        if (match[2]) {
            const params = match[2].split(";");
            for (const param of params) {
                const p = param.trim().split("=");
                if (p[0] === "q") {
                    q = parseFloat(p[1]);
                    break;
                }
            }
        }
        return { encoding, q, i };
    }
    function specify(encoding, spec, i = -1) {
        if (!spec.encoding) {
            return;
        }
        let s = 0;
        if (spec.encoding.toLocaleLowerCase() === encoding.toLocaleLowerCase()) {
            s = 1;
        }
        else if (spec.encoding !== "*") {
            return;
        }
        return {
            i,
            o: spec.i,
            q: spec.q,
            s
        };
    }
    function parseAcceptEncoding(accept) {
        const accepts = accept.split(",");
        const parsedAccepts = [];
        let hasIdentity = false;
        let minQuality = 1;
        for (let i = 0; i < accepts.length; i++) {
            const encoding = parseEncoding(accepts[i].trim(), i);
            if (encoding) {
                parsedAccepts.push(encoding);
                hasIdentity = hasIdentity || !!specify("identity", encoding);
                minQuality = Math.min(minQuality, encoding.q || 1);
            }
        }
        if (!hasIdentity) {
            parsedAccepts.push({
                encoding: "identity",
                q: minQuality,
                i: accepts.length - 1
            });
        }
        return parsedAccepts;
    }
    function compareSpecs(a, b) {
        return (b.q - a.q ||
            (b.s || 0) - (a.s || 0) ||
            (a.o || 0) - (b.o || 0) ||
            a.i - b.i ||
            0);
    }
    function isQuality(spec) {
        return spec.q > 0;
    }
    function getEncodingPriority(encoding, accepted, index) {
        let priority = { o: -1, q: 0, s: 0, i: 0 };
        for (const s of accepted) {
            const spec = specify(encoding, s, index);
            if (spec &&
                (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) <
                    0) {
                priority = spec;
            }
        }
        return priority;
    }
    /** Given an `Accept-Encoding` string, parse out the encoding returning a
     * negotiated encoding based on the `provided` encodings otherwise just a
     * prioritized array of encodings. */
    function preferredEncodings(accept, provided) {
        const accepts = parseAcceptEncoding(accept);
        if (!provided) {
            return accepts
                .filter(isQuality)
                .sort(compareSpecs)
                .map(spec => spec.encoding);
        }
        const priorities = provided.map((type, index) => getEncodingPriority(type, accepts, index));
        return priorities
            .filter(isQuality)
            .sort(compareSpecs)
            .map(priority => provided[priorities.indexOf(priority)]);
    }
    exports.preferredEncodings = preferredEncodings;
});
/*!
 * Adapted directly from media-typer at https://github.com/jshttp/media-typer/
 * which is licensed as follows:
 *
 * media-typer
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
define("https://deno.land/x/oak/mediaTyper", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const SUBTYPE_NAME_REGEXP = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/;
    const TYPE_NAME_REGEXP = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/;
    const TYPE_REGEXP = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
    class MediaType {
        constructor(
        /** The type of the media type. */
        type, 
        /** The subtype of the media type. */
        subtype, 
        /** The optional suffix of the media type. */
        suffix) {
            this.type = type;
            this.subtype = subtype;
            this.suffix = suffix;
        }
    }
    /** Given a media type object, return a media type string.
     *
     *       format({
     *         type: "text",
     *         subtype: "html"
     *       }); // returns "text/html"
     */
    function format(obj) {
        const { subtype, suffix, type } = obj;
        if (!TYPE_NAME_REGEXP.test(type)) {
            throw new TypeError("Invalid type.");
        }
        if (!SUBTYPE_NAME_REGEXP.test(subtype)) {
            throw new TypeError("Invalid subtype.");
        }
        let str = `${type}/${subtype}`;
        if (suffix) {
            if (!TYPE_NAME_REGEXP.test(suffix)) {
                throw new TypeError("Invalid suffix.");
            }
            str += `+${suffix}`;
        }
        return str;
    }
    exports.format = format;
    /** Given a media type string, return a media type object.
     *
     *       parse("application/json-patch+json");
     *       // returns {
     *       //   type: "application",
     *       //   subtype: "json-patch",
     *       //   suffix: "json"
     *       // }
     */
    function parse(str) {
        const match = TYPE_REGEXP.exec(str.toLowerCase());
        if (!match) {
            throw new TypeError("Invalid media type.");
        }
        let [, type, subtype] = match;
        let suffix;
        const idx = subtype.lastIndexOf("+");
        if (idx !== -1) {
            suffix = subtype.substr(idx + 1);
            subtype = subtype.substr(0, idx);
        }
        return new MediaType(type, subtype, suffix);
    }
    exports.parse = parse;
});
/*!
 * Adapted directly from type-is at https://github.com/jshttp/type-is/
 * which is licensed as follows:
 *
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */
define("https://deno.land/x/oak/isMediaType", ["require", "exports", "https://deno.land/x/oak/deps", "https://deno.land/x/oak/mediaTyper"], function (require, exports, deps_ts_3, mediaTyper_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function mimeMatch(expected, actual) {
        if (expected === undefined) {
            return false;
        }
        const actualParts = actual.split("/");
        const expectedParts = expected.split("/");
        if (actualParts.length !== 2 || expectedParts.length !== 2) {
            return false;
        }
        const [actualType, actualSubtype] = actualParts;
        const [expectedType, expectedSubtype] = expectedParts;
        if (expectedType !== "*" && expectedType !== actualType) {
            return false;
        }
        if (expectedSubtype.substr(0, 2) === "*+") {
            return (expectedSubtype.length <= actualSubtype.length + 1 &&
                expectedSubtype.substr(1) ===
                    actualSubtype.substr(1 - expectedSubtype.length));
        }
        if (expectedSubtype !== "*" && expectedSubtype !== actualSubtype) {
            return false;
        }
        return true;
    }
    function normalize(type) {
        switch (type) {
            case "urlencoded":
                return "application/x-www-form-urlencoded";
            case "multipart":
                return "multipart/*";
        }
        if (type[0] === "+") {
            return `*/*${type}`;
        }
        return type.includes("/") ? type : deps_ts_3.lookup(type);
    }
    function normalizeType(value) {
        try {
            const val = value.split(";");
            const type = mediaTyper_ts_1.parse(val[0]);
            return mediaTyper_ts_1.format(type);
        }
        catch {
            return;
        }
    }
    /** Given a value of the content type of a request and an array of types,
     * provide the matching type or `false` if no types are matched.
     */
    function isMediaType(value, types) {
        const val = normalizeType(value);
        if (!val) {
            return false;
        }
        if (!types.length) {
            return val;
        }
        for (const type of types) {
            if (mimeMatch(normalize(type), val)) {
                return type[0] === "+" || type.includes("*") ? val : type;
            }
        }
        return false;
    }
    exports.isMediaType = isMediaType;
});
/*!
 * Adapted directly from negotiator at https://github.com/jshttp/negotiator/
 * which is licensed as follows:
 *
 * (The MIT License)
 *
 * Copyright (c) 2012-2014 Federico Romero
 * Copyright (c) 2012-2014 Isaac Z. Schlueter
 * Copyright (c) 2014-2015 Douglas Christopher Wilson
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
define("https://deno.land/x/oak/mediaType", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
    function quoteCount(str) {
        let count = 0;
        let index = 0;
        while ((index = str.indexOf(`"`, index)) !== -1) {
            count++;
            index++;
        }
        return count;
    }
    function splitMediaTypes(accept) {
        const accepts = accept.split(",");
        let j = 0;
        for (let i = 1; i < accepts.length; i++) {
            if (quoteCount(accepts[j]) % 2 === 0) {
                accepts[++j] = accepts[i];
            }
            else {
                accepts[j] += `,${accepts[i]}`;
            }
        }
        accepts.length = j + 1;
        return accepts;
    }
    function splitParameters(str) {
        const parameters = str.split(";");
        let j = 0;
        for (let i = 1; i < parameters.length; i++) {
            if (quoteCount(parameters[j]) % 2 === 0) {
                parameters[++j] = parameters[i];
            }
            else {
                parameters[j] += `;${parameters[i]}`;
            }
        }
        parameters.length = j + 1;
        return parameters.map(p => p.trim());
    }
    function splitKeyValuePair(str) {
        const [key, value] = str.split("=");
        return [key.toLowerCase(), value];
    }
    function parseMediaType(str, i) {
        const match = simpleMediaTypeRegExp.exec(str);
        if (!match) {
            return;
        }
        const params = Object.create(null);
        let q = 1;
        const [, type, subtype, parameters] = match;
        if (parameters) {
            const kvps = splitParameters(parameters).map(splitKeyValuePair);
            for (const [key, val] of kvps) {
                const value = val && val[0] === `"` && val[val.length - 1] === `"`
                    ? val.substr(1, val.length - 2)
                    : val;
                if (key === "q" && value) {
                    q = parseFloat(value);
                    break;
                }
                params[key] = value;
            }
        }
        return { type, subtype, params, q, i };
    }
    function parseAccept(accept) {
        const accepts = splitMediaTypes(accept);
        const mediaTypes = [];
        for (let i = 0; i < accepts.length; i++) {
            const mediaType = parseMediaType(accepts[i].trim(), i);
            if (mediaType) {
                mediaTypes.push(mediaType);
            }
        }
        return mediaTypes;
    }
    function isQuality(spec) {
        return (spec.q || 0) > 0;
    }
    function compareSpecs(a, b) {
        return ((b.q || 0) - (a.q || 0) ||
            (b.s || 0) - (a.s || 0) ||
            (a.o || 0) - (b.o || 0) ||
            (a.i || 0) - (b.i || 0));
    }
    function getFullType(spec) {
        return `${spec.type}/${spec.subtype}`;
    }
    function specify(type, spec, index) {
        const p = parseMediaType(type, index);
        if (!p) {
            return;
        }
        let s = 0;
        if (spec.type.toLowerCase() === p.type.toLowerCase()) {
            s |= 4;
        }
        else if (spec.type !== "*") {
            return;
        }
        if (spec.subtype.toLowerCase() === p.subtype.toLowerCase()) {
            s |= 2;
        }
        else if (spec.subtype !== "*") {
            return;
        }
        const keys = Object.keys(spec.params);
        if (keys.length) {
            if (keys.every(key => (spec.params[key] || "").toLowerCase() ===
                (p.params[key] || "").toLowerCase())) {
                s |= 1;
            }
            else {
                return;
            }
        }
        return {
            i: index,
            o: spec.o,
            q: spec.q,
            s
        };
    }
    function getMediaTypePriority(type, accepted, index) {
        let priority = { o: -1, q: 0, s: 0, i: index };
        for (const accepts of accepted) {
            const spec = specify(type, accepts, index);
            if (spec &&
                ((priority.s || 0) - (spec.s || 0) ||
                    (priority.q || 0) - (spec.q || 0) ||
                    (priority.o || 0) - (spec.o || 0)) < 0) {
                priority = spec;
            }
        }
        return priority;
    }
    function preferredMediaTypes(accept, provided) {
        const accepts = parseAccept(accept === undefined ? "*/*" : accept || "");
        if (!provided) {
            return accepts
                .filter(isQuality)
                .sort(compareSpecs)
                .map(getFullType);
        }
        const priorities = provided.map((type, index) => {
            return getMediaTypePriority(type, accepts, index);
        });
        return priorities
            .filter(isQuality)
            .sort(compareSpecs)
            .map(priority => provided[priorities.indexOf(priority)]);
    }
    exports.preferredMediaTypes = preferredMediaTypes;
});
// Copyright 2018-2019 the oak authors. All rights reserved. MIT license.
define("https://deno.land/x/oak/request", ["require", "exports", "https://deno.land/x/oak/encoding", "https://deno.land/x/oak/httpError", "https://deno.land/x/oak/isMediaType", "https://deno.land/x/oak/mediaType"], function (require, exports, encoding_ts_1, httpError_ts_1, isMediaType_ts_1, mediaType_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    httpError_ts_1 = __importDefault(httpError_ts_1);
    var BodyType;
    (function (BodyType) {
        BodyType["JSON"] = "json";
        BodyType["Form"] = "form";
        BodyType["Text"] = "text";
        BodyType["Undefined"] = "undefined";
    })(BodyType = exports.BodyType || (exports.BodyType = {}));
    const decoder = new TextDecoder();
    const jsonTypes = ["json", "application/*+json", "application/csp-report"];
    const formTypes = ["urlencoded"];
    const textTypes = ["text"];
    class Request {
        /** Is `true` if the request has a body, otherwise `false`. */
        get hasBody() {
            return (this.headers.get("transfer-encoding") !== null ||
                !!parseInt(this.headers.get("content-length") || ""));
        }
        /** The `Headers` supplied in the request. */
        get headers() {
            return this._serverRequest.headers;
        }
        /** The HTTP Method used by the request. */
        get method() {
            return this._serverRequest.method;
        }
        /** The path of the request. */
        get path() {
            return this._path;
        }
        /** The search part of the URL of the request. */
        get search() {
            return this._search;
        }
        /** The parsed `URLSearchParams` of the request. */
        get searchParams() {
            return this._searchParams;
        }
        /** Returns the _original_ Deno server request. */
        get serverRequest() {
            return this._serverRequest;
        }
        /** The URL of the request. */
        get url() {
            return this._serverRequest.url;
        }
        constructor(serverRequest) {
            this._serverRequest = serverRequest;
            const [path, search] = serverRequest.url.split("?");
            this._path = path;
            this._search = search ? `?${search}` : undefined;
            this._searchParams = new URLSearchParams(search);
        }
        accepts(...types) {
            const acceptValue = this._serverRequest.headers.get("Accept");
            if (!acceptValue) {
                return;
            }
            if (types.length) {
                return mediaType_ts_1.preferredMediaTypes(acceptValue, types)[0];
            }
            return mediaType_ts_1.preferredMediaTypes(acceptValue);
        }
        acceptsCharsets(...charsets) {
            return undefined;
        }
        acceptsEncodings(...encodings) {
            const acceptEncodingValue = this._serverRequest.headers.get("Accept-Encoding");
            if (!acceptEncodingValue) {
                return;
            }
            if (encodings.length) {
                return encoding_ts_1.preferredEncodings(acceptEncodingValue, encodings)[0];
            }
            return encoding_ts_1.preferredEncodings(acceptEncodingValue);
        }
        acceptsLanguages(...langs) {
            return undefined;
        }
        /** If there is a body in the request, resolves with an object which
         * describes the body.  The `type` provides what type the body is and `body`
         * provides the actual body.
         */
        async body() {
            if (this._body) {
                return this._body;
            }
            const encoding = this.headers.get("content-encoding") || "identity";
            if (encoding !== "identity") {
                throw new httpError_ts_1.default.UnsupportedMediaType(`Unsupported content-encoding: ${encoding}`);
            }
            if (!this.hasBody) {
                return { type: BodyType.Undefined, value: undefined };
            }
            const contentType = this.headers.get("content-type");
            if (contentType) {
                const rawBody = await (this._rawBodyPromise ||
                    (this._rawBodyPromise = this._serverRequest.body()));
                const str = decoder.decode(rawBody);
                if (isMediaType_ts_1.isMediaType(contentType, jsonTypes)) {
                    return (this._body = { type: BodyType.JSON, value: JSON.parse(str) });
                }
                else if (isMediaType_ts_1.isMediaType(contentType, formTypes)) {
                    return (this._body = {
                        type: BodyType.Form,
                        value: new URLSearchParams(str)
                    });
                }
                else if (isMediaType_ts_1.isMediaType(contentType, textTypes)) {
                    return (this._body = { type: BodyType.Text, value: str });
                }
            }
            throw new httpError_ts_1.default.UnsupportedMediaType(contentType
                ? `Unsupported content-type: ${contentType}`
                : "Missing content-type");
        }
    }
    exports.Request = Request;
});
// Copyright 2018-2019 the oak authors. All rights reserved. MIT license.
define("https://deno.land/x/oak/util", ["require", "exports", "https://deno.land/x/oak/deps", "https://deno.land/x/oak/httpError"], function (require, exports, deps_ts_4, httpError_ts_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Safely decode a URI component, where if it fails, instead of throwing,
     * just returns the original string
     */
    function decodeComponent(text) {
        try {
            return decodeURIComponent(text);
        }
        catch {
            return text;
        }
    }
    exports.decodeComponent = decodeComponent;
    /** Determines if a string "looks" like HTML */
    function isHtml(value) {
        return /^\s*<(?:!DOCTYPE|html|body)/i.test(value);
    }
    exports.isHtml = isHtml;
    /*!
     * Adapted directly from https://github.com/pillarjs/resolve-path
     * which is licensed as follows:
     *
     * The MIT License (MIT)
     *
     * Copyright (c) 2014 Jonathan Ong <me@jongleberry.com>
     * Copyright (c) 2015-2018 Douglas Christopher Wilson <doug@somethingdoug.com>
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * 'Software'), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
     * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
     * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
     * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
     * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    const UP_PATH_REGEXP = /(?:^|[\\/])\.\.(?:[\\/]|$)/;
    function resolvePath(rootPath, relativePath) {
        let path = relativePath;
        let root = rootPath;
        // root is optional, similar to root.resolve
        if (arguments.length === 1) {
            path = rootPath;
            root = Deno.cwd();
        }
        if (path == null) {
            throw new TypeError("Argument relativePath is required.");
        }
        // containing NULL bytes is malicious
        if (path.includes("\0")) {
            throw httpError_ts_2.createHttpError(400, "Malicious Path");
        }
        // path should never be absolute
        if (deps_ts_4.isAbsolute(path)) {
            throw httpError_ts_2.createHttpError(400, "Malicious Path");
        }
        // path outside root
        if (UP_PATH_REGEXP.test(deps_ts_4.normalize("." + deps_ts_4.sep + path))) {
            throw httpError_ts_2.createHttpError(403);
        }
        // join the relative path
        return deps_ts_4.normalize(deps_ts_4.join(deps_ts_4.resolve(root), path));
    }
    exports.resolvePath = resolvePath;
});
// Copyright 2018-2019 the oak authors. All rights reserved. MIT license.
define("https://deno.land/x/oak/response", ["require", "exports", "https://deno.land/x/oak/deps", "https://deno.land/x/oak/util"], function (require, exports, deps_ts_5, util_ts_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const BODY_TYPES = ["string", "number", "bigint", "boolean", "symbol"];
    const encoder = new TextEncoder();
    class Response {
        constructor() {
            /** Headers that will be returned in the response */
            this.headers = new Headers();
        }
        _getBody() {
            const typeofBody = typeof this.body;
            let result;
            if (BODY_TYPES.includes(typeofBody)) {
                const bodyText = String(this.body);
                result = encoder.encode(bodyText);
                this.type = this.type || (util_ts_3.isHtml(bodyText) ? "html" : "text/plain");
            }
            else if (this.body instanceof Uint8Array) {
                result = this.body;
            }
            else if (typeofBody === "object" && this.body !== null) {
                result = encoder.encode(JSON.stringify(this.body));
                this.type = this.type || "json";
            }
            return result;
        }
        _setContentType() {
            if (this.type) {
                const contentTypeString = deps_ts_5.contentType(this.type);
                if (contentTypeString && !this.headers.has("Content-Type")) {
                    this.headers.append("Content-Type", contentTypeString);
                }
            }
        }
        /** Take this response and convert it to the response used by the Deno net
         * server. */
        toServerResponse() {
            // Process the body
            const body = this._getBody();
            // If there is a response type, set the content type header
            this._setContentType();
            // If there is no body and no content type and no set length, then set the
            // content length to 0
            if (!(body ||
                this.headers.has("Content-Type") ||
                this.headers.has("Content-Length"))) {
                this.headers.append("Content-Length", "0");
            }
            return {
                status: this.status || (body ? deps_ts_5.Status.OK : deps_ts_5.Status.NotFound),
                body,
                headers: this.headers
            };
        }
    }
    exports.Response = Response;
});
// Copyright 2018-2019 the oak authors. All rights reserved. MIT license.
define("https://deno.land/x/oak/context", ["require", "exports", "https://deno.land/x/oak/httpError", "https://deno.land/x/oak/request", "https://deno.land/x/oak/response"], function (require, exports, httpError_ts_3, request_ts_1, response_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Context {
        constructor(app, serverRequest) {
            /** The response object */
            this.response = new response_ts_1.Response();
            this.app = app;
            this.state = app.state;
            this.request = new request_ts_1.Request(serverRequest);
        }
        /** Create and throw an HTTP Error, which can be used to pass status
         * information which can be caught by other middleware to send more
         * meaningful error messages back to the client.
         */
        throw(errorStatus, message, props) {
            const err = httpError_ts_3.createHttpError(errorStatus, message);
            if (props) {
                Object.assign(err, props);
            }
            throw err;
        }
    }
    exports.Context = Context;
});
// Copyright 2018-2019 the oak authors. All rights reserved. MIT license.
define("https://deno.land/x/oak/middleware", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Compose multiple middleware functions into a single middleware function. */
    function compose(middleware) {
        return function composedMiddleware(context, next) {
            let index = -1;
            async function dispatch(i) {
                if (i <= index) {
                    throw new Error("next() called multiple times.");
                }
                index = i;
                let fn = middleware[i];
                if (i === middleware.length) {
                    fn = next;
                }
                if (!fn) {
                    return;
                }
                return fn(context, dispatch.bind(null, i + 1));
            }
            return dispatch(0);
        };
    }
    exports.compose = compose;
});
// Copyright 2018-2019 the oak authors. All rights reserved. MIT license.
define("https://deno.land/x/oak/application", ["require", "exports", "https://deno.land/x/oak/context", "https://deno.land/x/oak/middleware", "https://deno.land/x/oak/deps"], function (require, exports, context_ts_1, middleware_ts_1, deps_ts_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** A class which registers middleware (via `.use()`) and then processes
     * inbound requests against that middleware (via `.listen()`).
     *
     * The `context.state` can be typed via passing a generic argument when
     * constructing an instance of `Application`.
     */
    class Application {
        constructor(_serve = deps_ts_6.serve) {
            this._middleware = [];
            /** Generic state of the application, which can be specified by passing the
             * generic argument when constructing:
             *
             *       const app = new Application<{ foo: string }>();
             */
            this.state = {};
            this._serve = _serve;
        }
        /** Start listening for requests, processing registered middleware on each
         * request.
         */
        async listen(addr) {
            const middleware = middleware_ts_1.compose(this._middleware);
            const server = this._serve(addr);
            for await (const request of server) {
                const context = new context_ts_1.Context(this, request);
                await middleware(context);
                await request.respond(context.response.toServerResponse());
            }
        }
        /** Register middleware to be used with the application. */
        use(...middleware) {
            this._middleware.push(...middleware);
            return this;
        }
    }
    exports.Application = Application;
});
/*!
 * Adapted from path-to-regexp at https://github.com/pillarjs/path-to-regexp
 * which is licensed as:
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Blake Embrey (hello@blakeembrey.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
define("https://deno.land/x/oak/pathToRegExp", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const DEFAULT_DELIMITER = "/";
    const DEFAULT_DELIMITERS = "./";
    const PATH_REGEXP = new RegExp([
        "(\\\\.)",
        "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"
    ].join("|"), "g");
    function escapeGroup(group) {
        return group.replace(/([=!:$/()])/g, "\\$1");
    }
    function escapeString(str) {
        return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function parse(str, options) {
        const tokens = [];
        let key = 0;
        let index = 0;
        let path = "";
        const defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
        const delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS;
        let pathEscaped = false;
        let res;
        while ((res = PATH_REGEXP.exec(str)) !== null) {
            const [m, escaped] = res;
            const offset = res.index;
            path += str.slice(index, offset);
            index = offset + m.length;
            if (escaped) {
                path += escaped[1];
                pathEscaped = true;
                continue;
            }
            let prev = "";
            const next = str[index];
            const [, , name, capture, group, modifier] = res;
            if (!pathEscaped && path.length) {
                const k = path.length - 1;
                if (delimiters.indexOf(path[k]) > -1) {
                    prev = path[k];
                    path = path.slice(0, k);
                }
            }
            if (path) {
                tokens.push(path);
                path = "";
                pathEscaped = false;
            }
            const partial = prev !== "" && next !== undefined && next !== prev;
            const repeat = modifier === "+" || modifier === "*";
            const optional = modifier === "?" || modifier === "*";
            const delimiter = prev || defaultDelimiter;
            const pattern = capture || group;
            tokens.push({
                name: name || key++,
                prefix: prev,
                delimiter,
                optional,
                repeat,
                partial,
                pattern: pattern
                    ? escapeGroup(pattern)
                    : `[^${escapeString(delimiter)}]+?`
            });
        }
        if (path || index < str.length) {
            tokens.push(path + str.substr(index));
        }
        return tokens;
    }
    exports.parse = parse;
    function flags(options) {
        return options && options.sensitive ? "" : "i";
    }
    function arrayToRegExp(path, keys, options) {
        const parts = [];
        for (const p of path) {
            parts.push(pathToRegExp(p, keys, options).source);
        }
        return new RegExp(`(?:${parts.join("|")})`, flags(options));
    }
    function regExpToRegExp(path, keys) {
        if (keys) {
            const groups = path.source.match(/\((?!\?)/g);
            if (groups) {
                for (let i = 0; i < groups.length; i++) {
                    keys.push({
                        name: i,
                        prefix: null,
                        delimiter: null,
                        optional: false,
                        repeat: false,
                        partial: false,
                        pattern: null
                    });
                }
            }
        }
        return path;
    }
    function tokensToRegExp(tokens, keys, options = {}) {
        const { strict = false, start = true, end = true } = options;
        const delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
        const delimiters = options.delimiters || DEFAULT_DELIMITERS;
        const endsWith = []
            .concat(options.endsWith || [])
            .map(escapeString)
            .concat("$")
            .join("|");
        let route = start ? "^" : "";
        let isEndDelimited = tokens.length === 0;
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (typeof token === "string") {
                route += escapeString(token);
                isEndDelimited =
                    i === tokens.length - 1 && delimiters.includes(token[token.length - 1]);
            }
            else {
                const capture = token.repeat
                    ? `(?:${token.pattern})(?:${escapeString(token.delimiter || "")}(?:${token.pattern}))*`
                    : token.pattern;
                if (keys) {
                    keys.push(token);
                }
                if (token.optional) {
                    if (token.partial) {
                        route += `${escapeString(token.prefix || "")}(${capture})?`;
                    }
                    else {
                        route += `(?:${escapeString(token.prefix || "")}(${capture}))?`;
                    }
                }
                else {
                    route += `${escapeString(token.prefix || "")}(${capture})`;
                }
            }
        }
        if (end) {
            if (!strict) {
                route += `(?:${delimiter})?`;
            }
            route += endsWith === "$" ? "$" : `(?=${endsWith})`;
        }
        else {
            if (!strict) {
                route += `(?:${delimiter}(?=${endsWith}))?`;
            }
            if (!isEndDelimited) {
                route += `(?=${delimiter}|${endsWith})`;
            }
        }
        return new RegExp(route, flags(options));
    }
    function stringToRegExp(path, keys, options) {
        return tokensToRegExp(parse(path, options), keys, options);
    }
    /** Take a path, with supported tokens, and generate a regular expression which
     * will match and parse out the tokens.
     */
    function pathToRegExp(path, keys, options) {
        if (path instanceof RegExp) {
            return regExpToRegExp(path, keys);
        }
        if (Array.isArray(path)) {
            return arrayToRegExp(path, keys, options);
        }
        return stringToRegExp(path, keys, options);
    }
    exports.pathToRegExp = pathToRegExp;
});
/**
 * Adapted directly from koa-router at
 * https://github.com/alexmingoia/koa-router/ which is licensed as:
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Alexander C. Mingoia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
define("https://deno.land/x/oak/router", ["require", "exports", "https://deno.land/x/oak/deps", "https://deno.land/x/oak/httpError", "https://deno.land/x/oak/middleware", "https://deno.land/x/oak/pathToRegExp", "https://deno.land/x/oak/util"], function (require, exports, deps_ts_7, httpError_ts_4, middleware_ts_2, pathToRegExp_ts_1, util_ts_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    httpError_ts_4 = __importDefault(httpError_ts_4);
    const { MethodNotAllowed, NotImplemented } = httpError_ts_4.default;
    class Layer {
        constructor(path, methods, middleware, options = {}) {
            this.path = path;
            this.methods = methods;
            this.options = options;
            this.paramNames = [];
            this.name = options.name || null;
            this.stack = Array.isArray(middleware) ? middleware : [middleware];
            if (this.methods.includes("GET")) {
                this.methods.unshift("HEAD");
            }
            this.regexp = pathToRegExp_ts_1.pathToRegExp(path, this.paramNames, options);
        }
        matches(path) {
            return this.regexp.test(path);
        }
        params(captures, existingParams = {}) {
            const params = existingParams;
            for (let i = 0; i < captures.length; i++) {
                if (this.paramNames[i]) {
                    const capture = captures[i];
                    params[this.paramNames[i].name] = capture
                        ? util_ts_4.decodeComponent(capture)
                        : capture;
                }
            }
            return params;
        }
        captures(path) {
            if (this.options.ignoreCaptures) {
                return [];
            }
            const [, ...captures] = path.match(this.regexp);
            return captures;
        }
        setPrefix(prefix) {
            if (this.path) {
                this.path = `${prefix}${this.path}`;
                this.paramNames = [];
                this.regexp = pathToRegExp_ts_1.pathToRegExp(this.path, this.paramNames, this.options);
            }
            return this;
        }
    }
    const contextRouteMatches = new WeakMap();
    /** A class that routes requests to middleware based on the method and the
     * path name of the request.
     */
    class Router {
        constructor(options = {}) {
            this._stack = [];
            this._methods = options.methods || [
                "DELETE",
                "GET",
                "HEAD",
                "OPTIONS",
                "PATCH",
                "POST",
                "PUT"
            ];
        }
        _addRoute(path, middleware, ...methods) {
            if (Array.isArray(path)) {
                for (const r of path) {
                    this._addRoute(r, middleware, ...methods);
                }
                return this;
            }
            this._stack.push(new Layer(path, methods, middleware));
            return this;
        }
        _match(path, method) {
            const routesMatched = [];
            const matches = [];
            for (const layer of this._stack) {
                if (layer.matches(path)) {
                    routesMatched.push(layer);
                    if (layer.methods.includes(method)) {
                        matches.push(layer);
                    }
                }
            }
            return { routesMatched, matches };
        }
        /** Register middleware for the specified routes and the `DELETE`, `GET`,
         * `POST`, or `PUT` method is requested
         */
        all(route, ...middleware) {
            return this._addRoute(route, middleware, "DELETE", "GET", "POST", "PUT");
        }
        /** Middleware that automatically handles dealing with responding with
         * allowed methods for the defined routes.
         */
        allowedMethods(options = {}) {
            const implemented = this._methods;
            return async function allowedMethods(context, next) {
                await next();
                const allowed = new Set();
                if (!context.response.status ||
                    context.response.status === deps_ts_7.Status.NotFound) {
                    const contextRoutesMatched = contextRouteMatches.get(context);
                    if (contextRoutesMatched) {
                        for (const layer of contextRoutesMatched) {
                            for (const method of layer.methods) {
                                allowed.add(method);
                            }
                        }
                    }
                    const allowedValue = Array.from(allowed).join(", ");
                    if (!implemented.includes(context.request.method)) {
                        if (options.throw) {
                            let notImplementedThrowable;
                            if (typeof options.notImplemented === "function") {
                                notImplementedThrowable = options.notImplemented();
                            }
                            else {
                                notImplementedThrowable = new NotImplemented();
                            }
                            throw notImplementedThrowable;
                        }
                        else {
                            context.response.status = deps_ts_7.Status.NotImplemented;
                            context.response.headers.set("Allow", allowedValue);
                        }
                    }
                    else if (allowed.size) {
                        if (context.request.method === "OPTIONS") {
                            context.response.status = deps_ts_7.Status.OK;
                            context.response.body = "";
                            context.response.headers.set("Allow", allowedValue);
                        }
                        else if (!allowed.has(context.request.method)) {
                            if (options.throw) {
                                let notAllowedThrowable;
                                if (typeof options.methodNotAllowed === "function") {
                                    notAllowedThrowable = options.methodNotAllowed();
                                }
                                else {
                                    notAllowedThrowable = new MethodNotAllowed();
                                }
                                throw notAllowedThrowable;
                            }
                            else {
                                context.response.status = deps_ts_7.Status.MethodNotAllowed;
                                context.response.headers.set("Allow", allowedValue);
                            }
                        }
                    }
                }
            };
        }
        /** Register middleware for the specified routes when the `DELETE` method is
         * requested.
         */
        delete(route, ...middleware) {
            return this._addRoute(route, middleware, "DELETE");
        }
        /** Register middleware for the specified routes when the `GET` method is
         * requested.
         */
        get(route, ...middleware) {
            return this._addRoute(route, middleware, "GET");
        }
        /** Register middleware for the specified routes when the `HEAD` method is
         * requested.
         */
        head(route, ...middleware) {
            return this._addRoute(route, middleware, "HEAD");
        }
        /** Register middleware for the specified routes when the `OPTIONS` method is
         * requested.
         */
        options(route, ...middleware) {
            return this._addRoute(route, middleware, "OPTIONS");
        }
        /** Register middleware for the specified routes when the `PATCH` method is
         * requested.
         */
        patch(route, ...middleware) {
            return this._addRoute(route, middleware, "PATCH");
        }
        /** Register middleware for the specified routes when the `POST` method is
         * requested.
         */
        post(route, ...middleware) {
            return this._addRoute(route, middleware, "POST");
        }
        /** Register middleware for the specified routes when the `PUT` method is
         * requested.
         */
        put(route, ...middleware) {
            return this._addRoute(route, middleware, "PUT");
        }
        /** Return middleware that represents all the currently registered routes. */
        routes() {
            const dispatch = async (context, next) => {
                const { path, method } = context.request;
                const { routesMatched, matches } = this._match(path, method);
                const contextRoutesMatched = contextRouteMatches.get(context);
                contextRouteMatches.set(context, contextRoutesMatched
                    ? [...contextRoutesMatched, ...routesMatched]
                    : routesMatched);
                context.router = this;
                if (!matches.length) {
                    return next();
                }
                const chain = matches.reduce((prev, layer) => {
                    prev.push((context, next) => {
                        const captures = layer.captures(path);
                        context.params = layer.params(captures, context.params);
                        return next();
                    });
                    return [...prev, ...layer.stack];
                }, []);
                return middleware_ts_2.compose(chain)(context);
            };
            return dispatch;
        }
    }
    exports.Router = Router;
});
/*!
 * Adapted from koa-send at https://github.com/koajs/send and which is licensed
 * with the MIT license.
 */
define("https://deno.land/x/oak/send", ["require", "exports", "https://deno.land/x/oak/httpError", "https://deno.land/x/oak/deps", "https://deno.land/x/oak/util"], function (require, exports, httpError_ts_5, deps_ts_8, util_ts_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isHidden(root, path) {
        const pathArr = path.substr(root.length).split(deps_ts_8.sep);
        for (const segment of pathArr) {
            if (segment[0] === ".") {
                return true;
            }
            return false;
        }
    }
    async function exists(path) {
        try {
            return (await Deno.stat(path)).isFile();
        }
        catch {
            return false;
        }
    }
    function toUTCString(value) {
        return new Date(value).toUTCString();
    }
    /** Asynchronously fulfill a response with a file from the local file
     * system. */
    async function send({ request, response }, path, options = { root: "" }) {
        const { brotli = true, extensions, format = true, gzip = true, index, hidden = false, immutable = false, maxage = 0, root } = options;
        const trailingSlash = path[path.length - 1] === "/";
        path = util_ts_5.decodeComponent(path.substr(deps_ts_8.parse(path).root.length));
        if (index && trailingSlash) {
            path += index;
        }
        path = util_ts_5.resolvePath(root, path);
        if (!hidden && isHidden(root, path)) {
            return;
        }
        let encodingExt = "";
        if (brotli &&
            request.acceptsEncodings("br", "identity") === "br" &&
            (await exists(`${path}.br`))) {
            path = `${path}.br`;
            response.headers.set("Content-Encoding", "br");
            response.headers.delete("Content-Length");
            encodingExt = ".br";
        }
        else if (gzip &&
            request.acceptsEncodings("gzip", "identity") === "gzip" &&
            (await exists(`${path}.gz`))) {
            path = `${path}.gz`;
            response.headers.set("Content-Encoding", "gzip");
            response.headers.delete("Content-Length");
            encodingExt = ".gz";
        }
        if (extensions && !/\.[^/]*$/.exec(path)) {
            for (let ext of extensions) {
                if (!/^\./.exec(ext)) {
                    ext = `.${ext}`;
                }
                if (await exists(`${path}${ext}`)) {
                    path += ext;
                    break;
                }
            }
        }
        let stats;
        try {
            stats = await Deno.stat(path);
            if (stats.isDirectory()) {
                if (format && index) {
                    path += `/${index}`;
                    stats = await Deno.stat(path);
                }
                else {
                    return;
                }
            }
        }
        catch (err) {
            if (err instanceof Deno.DenoError) {
                if (err.kind === Deno.ErrorKind.NotFound) {
                    throw httpError_ts_5.createHttpError(404, err.message);
                }
            }
            throw httpError_ts_5.createHttpError(500, err.message);
        }
        response.headers.set("Content-Length", String(stats.len));
        if (!response.headers.has("Last-Modified") && stats.modified) {
            response.headers.set("Last-Modified", toUTCString(stats.modified));
        }
        if (!response.headers.has("Cache-Control")) {
            const directives = [`max-age=${(maxage / 1000) | 0}`];
            if (immutable) {
                directives.push("immutable");
            }
            response.headers.set("Cache-Control", directives.join(","));
        }
        if (!response.type) {
            response.type =
                encodingExt !== "" ? deps_ts_8.extname(deps_ts_8.basename(path, encodingExt)) : deps_ts_8.extname(path);
        }
        response.body = await Deno.readFile(path);
        return path;
    }
    exports.send = send;
});
// Copyright 2018-2019 the oak authors. All rights reserved. MIT license.
define("https://deno.land/x/oak/mod", ["require", "exports", "https://deno.land/x/oak/application", "https://deno.land/x/oak/context", "https://deno.land/x/oak/httpError", "https://deno.land/x/oak/middleware", "https://deno.land/x/oak/request", "https://deno.land/x/oak/response", "https://deno.land/x/oak/router", "https://deno.land/x/oak/send", "https://deno.land/x/oak/deps"], function (require, exports, application_ts_1, context_ts_2, httpError_ts_6, middleware_ts_3, request_ts_2, response_ts_2, router_ts_1, send_ts_1, deps_ts_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Application = application_ts_1.Application;
    exports.Context = context_ts_2.Context;
    exports.HttpError = httpError_ts_6.HttpError;
    exports.composeMiddleware = middleware_ts_3.compose;
    exports.BodyType = request_ts_2.BodyType;
    exports.Request = request_ts_2.Request;
    exports.Response = response_ts_2.Response;
    exports.Router = router_ts_1.Router;
    exports.send = send_ts_1.send;
    exports.Status = deps_ts_9.Status;
    exports.STATUS_TEXT = deps_ts_9.STATUS_TEXT;
});
define("file:///Users/jeroen.peeters/Documents/deno-serverless-poc/helloWorld", ["require", "exports", "https://deno.land/x/oak/mod"], function (require, exports, mod_ts_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const PORT = 8080;
    (async () => {
        const app = new mod_ts_7.Application();
        app.use(ctx => {
            ctx.response.body = "Hello World!";
        });
        console.log("Listening on localhost:" + PORT);
        await app.listen("127.0.0.1:" + 8080);
    })();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkQHYwLjkuMC9zdHJpbmdzL2VuY29kZS50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZEB2MC45LjAvc3RyaW5ncy9kZWNvZGUudHMiLCJodHRwczovL2Rlbm8ubGFuZC9zdGRAdjAuOS4wL3N0cmluZ3MvcGFkLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkQHYwLjkuMC9zdHJpbmdzL21vZC50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZEB2MC45LjAvZnMvcGF0aC9pbnRlcmZhY2UudHMiLCJodHRwczovL2Rlbm8ubGFuZC9zdGRAdjAuOS4wL2ZzL3BhdGgvY29uc3RhbnRzLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkQHYwLjkuMC9mcy9wYXRoL3V0aWxzLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkQHYwLjkuMC9mcy9wYXRoL3dpbjMyLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkQHYwLjkuMC9mcy9wYXRoL3Bvc2l4LnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkQHYwLjkuMC9mcy9wYXRoL21vZC50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZEB2MC45LjAvZnMvcGF0aC50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZEB2MC45LjAvaW8vdXRpbC50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZEB2MC45LjAvY29sb3JzL21vZC50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZEB2MC45LjAvdGVzdGluZy9kaWZmLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkQHYwLjkuMC90ZXN0aW5nL2Zvcm1hdC50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZEB2MC45LjAvdGVzdGluZy9wcmV0dHkudHMiLCJodHRwczovL2Rlbm8ubGFuZC9zdGRAdjAuOS4wL3Rlc3RpbmcvYXNzZXJ0cy50cyIsImh0dHBzOi8vZGVuby5sYW5kL3N0ZEB2MC45LjAvaW8vYnVmaW8udHMiLCJodHRwczovL2Rlbm8ubGFuZC9zdGRAdjAuOS4wL3RleHRwcm90by9tb2QudHMiLCJodHRwczovL2Rlbm8ubGFuZC9zdGRAdjAuOS4wL2h0dHAvaHR0cF9zdGF0dXMudHMiLCJodHRwczovL2Rlbm8ubGFuZC9zdGRAdjAuOS4wL3V0aWwvYXN5bmMudHMiLCJodHRwczovL2Rlbm8ubGFuZC9zdGRAdjAuOS4wL2h0dHAvc2VydmVyLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkQHYwLjkuMC9tZWRpYV90eXBlcy9kZXBzLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQvc3RkQHYwLjkuMC9tZWRpYV90eXBlcy9tb2QudHMiLCJodHRwczovL2Rlbm8ubGFuZC94L29hay9kZXBzLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQveC9vYWsvdHlwZXMudHMiLCJodHRwczovL2Rlbm8ubGFuZC94L29hay9odHRwRXJyb3IudHMiLCJodHRwczovL2Rlbm8ubGFuZC94L29hay9lbmNvZGluZy50cyIsImh0dHBzOi8vZGVuby5sYW5kL3gvb2FrL21lZGlhVHlwZXIudHMiLCJodHRwczovL2Rlbm8ubGFuZC94L29hay9pc01lZGlhVHlwZS50cyIsImh0dHBzOi8vZGVuby5sYW5kL3gvb2FrL21lZGlhVHlwZS50cyIsImh0dHBzOi8vZGVuby5sYW5kL3gvb2FrL3JlcXVlc3QudHMiLCJodHRwczovL2Rlbm8ubGFuZC94L29hay91dGlsLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQveC9vYWsvcmVzcG9uc2UudHMiLCJodHRwczovL2Rlbm8ubGFuZC94L29hay9jb250ZXh0LnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQveC9vYWsvbWlkZGxld2FyZS50cyIsImh0dHBzOi8vZGVuby5sYW5kL3gvb2FrL2FwcGxpY2F0aW9uLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQveC9vYWsvcGF0aFRvUmVnRXhwLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQveC9vYWsvcm91dGVyLnRzIiwiaHR0cHM6Ly9kZW5vLmxhbmQveC9vYWsvc2VuZC50cyIsImh0dHBzOi8vZGVuby5sYW5kL3gvb2FrL21vZC50cyIsImZpbGU6Ly8vVXNlcnMvamVyb2VuLnBlZXRlcnMvRG9jdW1lbnRzL2Rlbm8tc2VydmVybGVzcy1wb2MvaGVsbG9Xb3JsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQUEscUNBQXFDO0lBQ3hCLFFBQUEsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7SUFFekMsK0NBQStDO0lBQy9DLFNBQWdCLE1BQU0sQ0FBQyxLQUFjO1FBQ25DLE9BQU8sZUFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRkQsd0JBRUM7Ozs7O0lDTkQscUNBQXFDO0lBQ3hCLFFBQUEsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7SUFFekMsK0NBQStDO0lBQy9DLFNBQWdCLE1BQU0sQ0FBQyxLQUFrQjtRQUN2QyxPQUFPLGVBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUZELHdCQUVDOztBQ05ELDBFQUEwRTs7OztJQWdCMUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F5Qkc7SUFDSCxTQUFnQixHQUFHLENBQ2pCLEtBQWEsRUFDYixNQUFjLEVBQ2QsT0FBbUI7UUFDakIsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsS0FBSztRQUNiLElBQUksRUFBRSxNQUFNO1FBQ1osVUFBVSxFQUFFLEVBQUU7UUFDZCxVQUFVLEVBQUUsT0FBTztLQUNwQjtRQUVELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNoQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3hCLElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDdEMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFF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QUdDO0lBRU0sS0FBSyxVQUFVLGNBQWMsQ0FDbEMsSUFBWSxFQUNaLE9BQXFDO1FBRXJDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixJQUFJLEtBQUssRUFBRSxNQUFNLE9BQU8sSUFBSSxNQUFNLEVBQUU7WUFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQVRELHdDQVNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2WUQsMEVBQTBFOzs7OztJQUVqRSw0QkFBQSxPQUFPLENBQUE7SUFZSCxRQUFBLEVBQUUsR0FBTyx3QkFBRyxDQUFDOztBQ2QxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJHOzs7O0lBSUgsTUFBTSxtQkFBbUIsR0FBRyx5QkFBeUIsQ0FBQztJQUN0RCxNQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQztJQUVwQyxpREFBaUQ7SUFDcEMsUUFBQSxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7SUFFdEQsb0RBQW9EO0lBQ3ZDLFFBQUEsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBRS9DLGtFQUFrRTtJQUNsRSxTQUFTLFlBQVksQ0FDbkIsVUFBaUMsRUFDakMsS0FBMEI7UUFFMUIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUxRCxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBRSxDQUFDLEVBQUU7WUFDbEMsTUFBTSxJQUFJLEdBQUcsWUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFFN0IsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLFNBQVM7YUFDVjtZQUVELFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTNCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUN0QixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2xCLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUM7b0JBQ2hDLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNwRCxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFM0MsSUFDRSxPQUFPLEtBQUssMEJBQTBCO3dCQUN0QyxDQUFDLElBQUksR0FBRyxFQUFFOzRCQUNSLENBQUMsSUFBSSxLQUFLLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxjQUFjLENBQUMsQ0FBQyxFQUM1RDt3QkFDQSxTQUFTO3FCQUNWO2lCQUNGO2dCQUVELEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQscUNBQXFDO0lBQ3JDLFlBQVksQ0FBQyxrQkFBVSxFQUFFLGFBQUssQ0FBQyxDQUFDO0lBRWhDOztPQUVHO0lBQ0gsU0FBZ0IsT0FBTyxDQUFDLElBQVk7UUFDbEMsTUFBTSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDTixPQUFPO1NBQ1I7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLFlBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUVyQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjtRQUVELElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQWZELDBCQWVDO0lBRUQ7O09BRUc7SUFDSCxTQUFnQixNQUFNLENBQUMsSUFBWTtRQUNqQyxNQUFNLFNBQVMsR0FBRyxpQkFBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDbkMsV0FBVyxFQUFFO2FBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWIsT0FBTyxhQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFORCx3QkFNQztJQUVEOztPQUVHO0lBQ0gsU0FBZ0IsV0FBVyxDQUFDLEdBQVc7UUFDckMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLEVBQUUsRUFBRTtnQkFDTixJQUFJLElBQUksYUFBYSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQzthQUN6QztTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBZkQsa0NBZUM7SUFFRDs7T0FFRztJQUNILFNBQWdCLFNBQVMsQ0FBQyxJQUFZO1FBQ3BDLE1BQU0sS0FBSyxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBRUQsTUFBTSxJQUFJLEdBQUcsa0JBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBRUQsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQWRELDhCQWNDOztBQ3BKRCx5RUFBeUU7Ozs7SUFNdkUsNEJBQUEsS0FBSyxDQUFBO0lBQ0wsNkJBQUEsTUFBTSxDQUFBO0lBQ04sb0NBQUEsYUFBYSxDQUFBO0lBR2Isa0NBQUEsTUFBTSxDQUFBO0lBQ04sdUNBQUEsV0FBVyxDQUFBO0lBR1gsNEJBQUEsUUFBUSxDQUFBO0lBQ1IsMkJBQUEsT0FBTyxDQUFBO0lBQ1Asd0JBQUEsSUFBSSxDQUFBO0lBQ0osOEJBQUEsVUFBVSxDQUFBO0lBQ1YsNkJBQUEsU0FBUyxDQUFBO0lBQ1QseUJBQUEsS0FBSyxDQUFBO0lBQ0wsMkJBQUEsT0FBTyxDQUFBO0lBQ1AsdUJBQUEsR0FBRyxDQUFBO0lBR0gsK0JBQUEsV0FBVyxDQUFBO0lBQ1gsMEJBQUEsTUFBTSxDQUFBOztBQzFCUix5RUFBeUU7Ozs7SUFFekUsSUFBWSxXQXlDWDtJQXpDRCxXQUFZLFdBQVc7UUFDckIsMkRBQWdCLENBQUE7UUFDaEIsK0RBQWtCLENBQUE7UUFDbEIscUVBQXFCLENBQUE7UUFDckIseURBQWUsQ0FBQTtRQUNmLHVEQUFjLENBQUE7UUFDZCx1RUFBc0IsQ0FBQTtRQUN0QixpRUFBbUIsQ0FBQTtRQUNuQix5RUFBdUIsQ0FBQTtRQUN2QixtRUFBb0IsQ0FBQTtRQUNwQix1REFBYyxDQUFBO1FBQ2QsK0NBQVUsQ0FBQTtRQUNWLG1FQUFvQixDQUFBO1FBQ3BCLDJFQUF3QixDQUFBO1FBQ3hCLGlGQUEyQixDQUFBO1FBQzNCLHlFQUF1QixDQUFBO1FBQ3ZCLCtFQUEwQixDQUFBO1FBQzFCLCtGQUFrQyxDQUFBO1FBQ2xDLHlFQUF1QixDQUFBO1FBQ3ZCLG1EQUFZLENBQUE7UUFDWiwyRUFBd0IsQ0FBQTtRQUN4Qiw2RUFBeUIsQ0FBQTtRQUN6QixtREFBWSxDQUFBO1FBQ1osdUVBQXNCLENBQUE7UUFDdEIscUVBQXFCLENBQUE7UUFDckIsK0VBQTBCLENBQUE7UUFDMUIscUVBQXFCLENBQUE7UUFDckIsNkZBQWlDLENBQUE7UUFDakMsMkZBQWdDLENBQUE7UUFFaEMsNkVBQXlCLENBQUE7UUFDekIsbUVBQW9CLENBQUE7UUFDcEIsMkRBQWdCLENBQUE7UUFDaEIsMkVBQXdCLENBQUE7UUFDeEIsbUVBQW9CLENBQUE7UUFDcEIscUZBQTZCLENBQUE7UUFDN0IsaUZBQTJCLENBQUE7UUFDM0IsNkVBQXlCLENBQUE7UUFDekIsK0RBQWtCLENBQUE7UUFDbEIsNkRBQWlCLENBQUE7UUFDakIsaUdBQW1DLENBQUEsQ0FBQyxjQUFjO0lBQ3BELENBQUMsRUF6Q1csV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUF5Q3RCOztBQzNDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQkc7Ozs7SUFLSCxNQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztJQUN0RCxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QyxjQUFjLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QyxjQUFjLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLGNBQWMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QyxjQUFjLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLGNBQWMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QyxjQUFjLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELGNBQWMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0MsY0FBYyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRCxjQUFjLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELGNBQWMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0MsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QyxjQUFjLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLGNBQWMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQyxjQUFjLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELGNBQWMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsY0FBYyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN2RCxjQUFjLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELGNBQWMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0MsY0FBYyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxQyxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QyxjQUFjLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLGNBQWMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRCxjQUFjLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELGNBQWMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0MsY0FBYyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkMsY0FBYyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV6RCxNQUFhLFNBQVUsU0FBUSxLQUFLO1FBQXBDOztZQUNFLFdBQU0sR0FBRyxLQUFLLENBQUM7WUFDZixXQUFNLEdBQUcsc0JBQVcsQ0FBQyxtQkFBbUIsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFIRCw4QkFHQztJQUVELFNBQVMsMEJBQTBCLENBQ2pDLE1BQW1CO1FBRW5CLE1BQU0sSUFBSSxHQUFHLEdBQUcsc0JBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzNDLE1BQU0sSUFBSSxHQUFHLEtBQU0sU0FBUSxTQUFTO1lBQ2xDLFlBQVksT0FBZ0I7Z0JBQzFCLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLHFCQUFXLENBQUMsR0FBRyxDQUFDLE1BQWEsQ0FBRSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUMzRCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7b0JBQ2xDLFlBQVksRUFBRSxJQUFJO29CQUNsQixVQUFVLEVBQUUsS0FBSztvQkFDakIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUM7UUFDRixPQUFPLElBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsTUFBTSxVQUFVLEdBRVosRUFBUyxDQUFDO0lBRWQsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLGNBQWMsRUFBRTtRQUN6QyxVQUFVLENBQUMsR0FBVSxDQUFDLEdBQUcsMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUQ7SUFFRDs7T0FFRztJQUNILFNBQWdCLGVBQWUsQ0FDN0IsU0FBc0IsR0FBRyxFQUN6QixPQUFnQjtRQUVoQixPQUFPLElBQUksVUFBVSxDQUFDLHNCQUFXLENBQUMsTUFBTSxDQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBTEQsMENBS0M7SUFFRCxrQkFBZSxVQUFVLENBQUM7O0FDcEgxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRzs7OztJQVVILE1BQU0sb0JBQW9CLEdBQUcsNkJBQTZCLENBQUM7SUFFM0QsU0FBUyxhQUFhLENBQUMsR0FBVyxFQUFFLENBQVM7UUFDM0MsTUFBTSxLQUFLLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNaLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQzFCLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDaEIsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckIsTUFBTTtpQkFDUDthQUNGO1NBQ0Y7UUFFRCxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsU0FBUyxPQUFPLENBQ2QsUUFBZ0IsRUFDaEIsSUFBaUIsRUFDakIsSUFBWSxDQUFDLENBQUM7UUFFZCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUN0RSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1A7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssR0FBRyxFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUVELE9BQU87WUFDTCxDQUFDO1lBQ0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1QsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxtQkFBbUIsQ0FBQyxNQUFjO1FBQ3pDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsTUFBTSxhQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUN4QyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFckQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsV0FBVyxHQUFHLFdBQVcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDN0QsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDcEQ7U0FDRjtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDakIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLENBQUMsRUFBRSxVQUFVO2dCQUNiLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7YUFDdEIsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsU0FBUyxZQUFZLENBQUMsQ0FBYyxFQUFFLENBQWM7UUFDbEQsT0FBTyxDQUNMLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxTQUFTLENBQUMsSUFBaUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsU0FBUyxtQkFBbUIsQ0FDMUIsUUFBZ0IsRUFDaEIsUUFBdUIsRUFDdkIsS0FBYTtRQUViLElBQUksUUFBUSxHQUFnQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRXhELEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXpDLElBQ0UsSUFBSTtnQkFDSixDQUFDLFFBQVEsQ0FBQyxDQUFFLEdBQUcsSUFBSSxDQUFDLENBQUUsSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsQ0FBRSxDQUFDO29CQUNyRSxDQUFDLEVBQ0g7Z0JBQ0EsUUFBUSxHQUFHLElBQUksQ0FBQzthQUNqQjtTQUNGO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzt5Q0FFcUM7SUFDckMsU0FBZ0Isa0JBQWtCLENBQ2hDLE1BQWMsRUFDZCxRQUFtQjtRQUVuQixNQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxPQUFPO2lCQUNYLE1BQU0sQ0FBQyxTQUFTLENBQUM7aUJBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUM7aUJBQ2xCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFTLENBQUMsQ0FBQztTQUNoQztRQUVELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FDOUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FDMUMsQ0FBQztRQUVGLE9BQU8sVUFBVTthQUNkLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQXJCRCxnREFxQkM7O0FDNUtEOzs7Ozs7O0dBT0c7Ozs7SUFFSCxNQUFNLG1CQUFtQixHQUFHLHlDQUF5QyxDQUFDO0lBQ3RFLE1BQU0sZ0JBQWdCLEdBQUcsd0NBQXdDLENBQUM7SUFDbEUsTUFBTSxXQUFXLEdBQUcsd0ZBQXdGLENBQUM7SUFFN0csTUFBTSxTQUFTO1FBQ2I7UUFDRSxrQ0FBa0M7UUFDM0IsSUFBWTtRQUNuQixxQ0FBcUM7UUFDOUIsT0FBZTtRQUN0Qiw2Q0FBNkM7UUFDdEMsTUFBZTtZQUpmLFNBQUksR0FBSixJQUFJLENBQVE7WUFFWixZQUFPLEdBQVAsT0FBTyxDQUFRO1lBRWYsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUNyQixDQUFDO0tBQ0w7SUFFRDs7Ozs7O09BTUc7SUFDSCxTQUFnQixNQUFNLENBQUMsR0FBYztRQUNuQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFFdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN0QyxNQUFNLElBQUksU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUUvQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2xDLE1BQU0sSUFBSSxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUN4QztZQUVELEdBQUcsSUFBSSxJQUFJLE1BQU0sRUFBRSxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBckJELHdCQXFCQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsU0FBZ0IsS0FBSyxDQUFDLEdBQVc7UUFDL0IsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsTUFBTSxJQUFJLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLE1BQTBCLENBQUM7UUFFL0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNkLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbEM7UUFFRCxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQWpCRCxzQkFpQkM7O0FDaEZEOzs7Ozs7O0dBT0c7Ozs7SUFLSCxTQUFTLFNBQVMsQ0FBQyxRQUE0QixFQUFFLE1BQWM7UUFDN0QsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUMsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDaEQsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRyxhQUFhLENBQUM7UUFFdEQsSUFBSSxZQUFZLEtBQUssR0FBRyxJQUFJLFlBQVksS0FBSyxVQUFVLEVBQUU7WUFDdkQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3pDLE9BQU8sQ0FDTCxlQUFlLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDbEQsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FDbkQsQ0FBQztTQUNIO1FBRUQsSUFBSSxlQUFlLEtBQUssR0FBRyxJQUFJLGVBQWUsS0FBSyxhQUFhLEVBQUU7WUFDaEUsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFNBQVMsU0FBUyxDQUFDLElBQVk7UUFDN0IsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLFlBQVk7Z0JBQ2YsT0FBTyxtQ0FBbUMsQ0FBQztZQUM3QyxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxhQUFhLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDbkIsT0FBTyxNQUFNLElBQUksRUFBRSxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFNBQVMsYUFBYSxDQUFDLEtBQWE7UUFDbEMsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsTUFBTSxJQUFJLEdBQUcscUJBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLHNCQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckI7UUFBQyxNQUFNO1lBQ04sT0FBTztTQUNSO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsU0FBZ0IsV0FBVyxDQUFDLEtBQWEsRUFBRSxLQUFlO1FBQ3hELE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFFRCxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN4QixJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUMzRDtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBbEJELGtDQWtCQzs7QUM1RkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Qkc7Ozs7SUFZSCxNQUFNLHFCQUFxQixHQUFHLDBDQUEwQyxDQUFDO0lBRXpFLFNBQVMsVUFBVSxDQUFDLEdBQVc7UUFDN0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWQsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQy9DLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLENBQUM7U0FDVDtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELFNBQVMsZUFBZSxDQUFDLE1BQWM7UUFDckMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDaEM7U0FDRjtRQUVELE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsU0FBUyxlQUFlLENBQUMsR0FBVztRQUNsQyxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQztpQkFBTTtnQkFDTCxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUN0QztTQUNGO1FBRUQsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxTQUFTLGlCQUFpQixDQUFDLEdBQVc7UUFDcEMsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFNBQVMsY0FBYyxDQUFDLEdBQVcsRUFBRSxDQUFTO1FBQzVDLE1BQU0sS0FBSyxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBRUQsTUFBTSxNQUFNLEdBQTRDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFNUMsSUFBSSxVQUFVLEVBQUU7WUFDZCxNQUFNLElBQUksR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFFaEUsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDN0IsTUFBTSxLQUFLLEdBQ1QsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRztvQkFDbEQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUVWLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUU7b0JBQ3hCLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3RCLE1BQU07aUJBQ1A7Z0JBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUNyQjtTQUNGO1FBRUQsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsU0FBUyxXQUFXLENBQUMsTUFBYztRQUNqQyxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEMsTUFBTSxVQUFVLEdBQW9CLEVBQUUsQ0FBQztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxNQUFNLFNBQVMsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXZELElBQUksU0FBUyxFQUFFO2dCQUNiLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUI7U0FDRjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUE0QjtRQUM3QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFNBQVMsWUFBWSxDQUNuQixDQUF5QixFQUN6QixDQUF5QjtRQUV6QixPQUFPLENBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDeEIsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLFdBQVcsQ0FBQyxJQUFtQjtRQUN0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELFNBQVMsT0FBTyxDQUNkLElBQVksRUFDWixJQUFtQixFQUNuQixLQUFhO1FBRWIsTUFBTSxDQUFDLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ04sT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVYsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDcEQsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNSO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUMxRCxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ1I7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssR0FBRyxFQUFFO1lBQy9CLE9BQU87U0FDUjtRQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQ0UsSUFBSSxDQUFDLEtBQUssQ0FDUixHQUFHLENBQUMsRUFBRSxDQUNKLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FDdEMsRUFDRDtnQkFDQSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ1I7aUJBQU07Z0JBQ0wsT0FBTzthQUNSO1NBQ0Y7UUFFRCxPQUFPO1lBQ0wsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLG9CQUFvQixDQUMzQixJQUFZLEVBQ1osUUFBeUIsRUFDekIsS0FBYTtRQUViLElBQUksUUFBUSxHQUEyQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBRXZFLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQzlCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRTNDLElBQ0UsSUFBSTtnQkFDSixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDeEM7Z0JBQ0EsUUFBUSxHQUFHLElBQUksQ0FBQzthQUNqQjtTQUNGO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQWdCLG1CQUFtQixDQUNqQyxNQUFzQixFQUN0QixRQUFtQjtRQUVuQixNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sT0FBTztpQkFDWCxNQUFNLENBQUMsU0FBUyxDQUFDO2lCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDO2lCQUNsQixHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckI7UUFFRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzlDLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sVUFBVTthQUNkLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQXJCRCxrREFxQkM7O0FDNVBELHlFQUF5RTs7Ozs7SUFTekUsSUFBWSxRQUtYO0lBTEQsV0FBWSxRQUFRO1FBQ2xCLHlCQUFhLENBQUE7UUFDYix5QkFBYSxDQUFBO1FBQ2IseUJBQWEsQ0FBQTtRQUNiLG1DQUF1QixDQUFBO0lBQ3pCLENBQUMsRUFMVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUtuQjtJQVFELE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7SUFFbEMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztJQUMzRSxNQUFNLFNBQVMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFM0IsTUFBYSxPQUFPO1FBUWxCLDhEQUE4RDtRQUM5RCxJQUFJLE9BQU87WUFDVCxPQUFPLENBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsS0FBSyxJQUFJO2dCQUM5QyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQ3JELENBQUM7UUFDSixDQUFDO1FBRUQsNkNBQTZDO1FBQzdDLElBQUksT0FBTztZQUNULE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDckMsQ0FBQztRQUVELDJDQUEyQztRQUMzQyxJQUFJLE1BQU07WUFDUixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBcUIsQ0FBQztRQUNuRCxDQUFDO1FBRUQsK0JBQStCO1FBQy9CLElBQUksSUFBSTtZQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO1FBRUQsaURBQWlEO1FBQ2pELElBQUksTUFBTTtZQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDO1FBRUQsbURBQW1EO1FBQ25ELElBQUksWUFBWTtZQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDO1FBRUQsa0RBQWtEO1FBQ2xELElBQUksYUFBYTtZQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDO1FBRUQsOEJBQThCO1FBQzlCLElBQUksR0FBRztZQUNMLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7UUFDakMsQ0FBQztRQUVELFlBQVksYUFBNEI7WUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7WUFDcEMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQVlELE9BQU8sQ0FBQyxHQUFHLEtBQWU7WUFDeEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLE9BQU87YUFDUjtZQUNELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsT0FBTyxrQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7WUFDRCxPQUFPLGtDQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFJRCxlQUFlLENBQUMsR0FBRyxRQUFrQjtZQUNuQyxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBZ0JELGdCQUFnQixDQUFDLEdBQUcsU0FBbUI7WUFDckMsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQ3pELGlCQUFpQixDQUNsQixDQUFDO1lBQ0YsSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUN4QixPQUFPO2FBQ1I7WUFDRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BCLE9BQU8sZ0NBQWtCLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUQ7WUFDRCxPQUFPLGdDQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakQsQ0FBQztRQUlELGdCQUFnQixDQUFDLEdBQUcsS0FBZTtZQUNqQyxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsS0FBSyxDQUFDLElBQUk7WUFDUixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25CO1lBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxVQUFVLENBQUM7WUFDcEUsSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO2dCQUMzQixNQUFNLElBQUksc0JBQVUsQ0FBQyxvQkFBb0IsQ0FDdkMsaUNBQWlDLFFBQVEsRUFBRSxDQUM1QyxDQUFDO2FBQ0g7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUN2RDtZQUNELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JELElBQUksV0FBVyxFQUFFO2dCQUNmLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZTtvQkFDekMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLDRCQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxFQUFFO29CQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDdkU7cUJBQU0sSUFBSSw0QkFBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsRUFBRTtvQkFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUc7d0JBQ25CLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTt3QkFDbkIsS0FBSyxFQUFFLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQztxQkFDaEMsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNLElBQUksNEJBQVcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLEVBQUU7b0JBQzlDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7WUFDRCxNQUFNLElBQUksc0JBQVUsQ0FBQyxvQkFBb0IsQ0FDdkMsV0FBVztnQkFDVCxDQUFDLENBQUMsNkJBQTZCLFdBQVcsRUFBRTtnQkFDNUMsQ0FBQyxDQUFDLHNCQUFzQixDQUMzQixDQUFDO1FBQ0osQ0FBQztLQUNGO0lBOUpELDBCQThKQzs7QUMxTEQseUVBQXlFOzs7O0lBS3pFOztPQUVHO0lBQ0gsU0FBZ0IsZUFBZSxDQUFDLElBQVk7UUFDMUMsSUFBSTtZQUNGLE9BQU8sa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7UUFBQyxNQUFNO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFORCwwQ0FNQztJQUVELCtDQUErQztJQUMvQyxTQUFnQixNQUFNLENBQUMsS0FBYTtRQUNsQyxPQUFPLDhCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRkQsd0JBRUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BMkJHO0lBRUgsTUFBTSxjQUFjLEdBQUcsNEJBQTRCLENBQUM7SUFJcEQsU0FBZ0IsV0FBVyxDQUFDLFFBQWdCLEVBQUUsWUFBcUI7UUFDakUsSUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDO1FBQ3hCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUVwQiw0Q0FBNEM7UUFDNUMsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ2hCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDbkI7UUFFRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsTUFBTSxJQUFJLFNBQVMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQzNEO1FBRUQscUNBQXFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixNQUFNLDhCQUFlLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDOUM7UUFFRCxnQ0FBZ0M7UUFDaEMsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sOEJBQWUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUM5QztRQUVELG9CQUFvQjtRQUNwQixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQVMsQ0FBQyxHQUFHLEdBQUcsYUFBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDcEQsTUFBTSw4QkFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBRUQseUJBQXlCO1FBQ3pCLE9BQU8sbUJBQVMsQ0FBQyxjQUFJLENBQUMsaUJBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUEvQkQsa0NBK0JDOztBQ3JGRCx5RUFBeUU7Ozs7SUFXekUsTUFBTSxVQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFdkUsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUVsQyxNQUFhLFFBQVE7UUFBckI7WUE2QkUsb0RBQW9EO1lBQ3BELFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBbUMxQixDQUFDO1FBaEVTLFFBQVE7WUFDZCxNQUFNLFVBQVUsR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDcEMsSUFBSSxNQUE4QixDQUFDO1lBQ25DLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDckU7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLFVBQVUsRUFBRTtnQkFDMUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDcEI7aUJBQU0sSUFBSSxVQUFVLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUN4RCxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO2FBQ2pDO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUVPLGVBQWU7WUFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNiLE1BQU0saUJBQWlCLEdBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELElBQUksaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLENBQUM7aUJBQ3hEO2FBQ0Y7UUFDSCxDQUFDO1FBY0Q7cUJBQ2E7UUFDYixnQkFBZ0I7WUFDZCxtQkFBbUI7WUFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRTdCLDJEQUEyRDtZQUMzRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFdkIsMEVBQTBFO1lBQzFFLHNCQUFzQjtZQUN0QixJQUNFLENBQUMsQ0FDQyxJQUFJO2dCQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FDbkMsRUFDRDtnQkFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM1QztZQUVELE9BQU87Z0JBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDM0QsSUFBSTtnQkFDSixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEIsQ0FBQztRQUNKLENBQUM7S0FDRjtJQWpFRCw0QkFpRUM7O0FDaEZELHlFQUF5RTs7OztJQVN6RSxNQUFhLE9BQU87UUFtQmxCLFlBQVksR0FBbUIsRUFBRSxhQUE0QjtZQVo3RCwwQkFBMEI7WUFDMUIsYUFBUSxHQUFHLElBQUksc0JBQVEsRUFBRSxDQUFDO1lBWXhCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxvQkFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRDs7O1dBR0c7UUFDSCxLQUFLLENBQUMsV0FBd0IsRUFBRSxPQUFnQixFQUFFLEtBQWM7WUFDOUQsTUFBTSxHQUFHLEdBQUcsOEJBQWUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDM0I7WUFDRCxNQUFNLEdBQUcsQ0FBQztRQUNaLENBQUM7S0FDRjtJQXBDRCwwQkFvQ0M7O0FDN0NELHlFQUF5RTs7OztJQVl6RSwrRUFBK0U7SUFDL0UsU0FBZ0IsT0FBTyxDQUdyQixVQUE4QjtRQUM5QixPQUFPLFNBQVMsa0JBQWtCLENBQUMsT0FBVSxFQUFFLElBQTBCO1lBQ3ZFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2YsS0FBSyxVQUFVLFFBQVEsQ0FBQyxDQUFTO2dCQUMvQixJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7b0JBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2lCQUNsRDtnQkFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLElBQUksRUFBRSxHQUFpQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxLQUFLLFVBQVUsQ0FBQyxNQUFNLEVBQUU7b0JBQzNCLEVBQUUsR0FBRyxJQUFJLENBQUM7aUJBQ1g7Z0JBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDUCxPQUFPO2lCQUNSO2dCQUNELE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQ0QsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQXRCRCwwQkFzQkM7O0FDbkNELHlFQUF5RTs7OztJQU16RTs7Ozs7T0FLRztJQUNILE1BQWEsV0FBVztRQVd0QixZQUFZLE1BQU0sR0FBRyxlQUFLO1lBVmxCLGdCQUFXLEdBQWdDLEVBQUUsQ0FBQztZQUd0RDs7OztlQUlHO1lBQ0gsVUFBSyxHQUFHLEVBQU8sQ0FBQztZQUdkLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFFRDs7V0FFRztRQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBWTtZQUN2QixNQUFNLFVBQVUsR0FBRyx1QkFBTyxDQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLEtBQUssRUFBRSxNQUFNLE9BQU8sSUFBSSxNQUFNLEVBQUU7Z0JBQ2xDLE1BQU0sT0FBTyxHQUFHLElBQUksb0JBQU8sQ0FBSSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxQixNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7YUFDNUQ7UUFDSCxDQUFDO1FBRUQsMkRBQTJEO1FBQzNELEdBQUcsQ0FBQyxHQUFHLFVBQXVDO1lBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQ0Y7SUFqQ0Qsa0NBaUNDOztBQzdDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRzs7OztJQThCSCxNQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztJQUM5QixNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQztJQUVoQyxNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FDNUI7UUFDRSxTQUFTO1FBQ1QscUZBQXFGO0tBQ3RGLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNYLEdBQUcsQ0FDSixDQUFDO0lBRUYsU0FBUyxXQUFXLENBQUMsS0FBYTtRQUNoQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxTQUFTLFlBQVksQ0FBQyxHQUFXO1FBQy9CLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsU0FBZ0IsS0FBSyxDQUFDLEdBQVcsRUFBRSxPQUFzQjtRQUN2RCxNQUFNLE1BQU0sR0FBWSxFQUFFLENBQUM7UUFDM0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksaUJBQWlCLENBQUM7UUFDN0UsTUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDO1FBQ3pFLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLEdBQTJCLENBQUM7UUFFaEMsT0FBTyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzdDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDekIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUUxQixJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixTQUFTO2FBQ1Y7WUFFRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLEVBQUUsQUFBRCxFQUFHLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUVqRCxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQy9CLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUUxQixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ3BDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUN6QjthQUNGO1lBRUQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDVixXQUFXLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUM7WUFDbkUsTUFBTSxNQUFNLEdBQUcsUUFBUSxLQUFLLEdBQUcsSUFBSSxRQUFRLEtBQUssR0FBRyxDQUFDO1lBQ3BELE1BQU0sUUFBUSxHQUFHLFFBQVEsS0FBSyxHQUFHLElBQUksUUFBUSxLQUFLLEdBQUcsQ0FBQztZQUN0RCxNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksZ0JBQWdCLENBQUM7WUFDM0MsTUFBTSxPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssQ0FBQztZQUVqQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLElBQUksRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUNuQixNQUFNLEVBQUUsSUFBSTtnQkFDWixTQUFTO2dCQUNULFFBQVE7Z0JBQ1IsTUFBTTtnQkFDTixPQUFPO2dCQUNQLE9BQU8sRUFBRSxPQUFPO29CQUNkLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO29CQUN0QixDQUFDLENBQUMsS0FBSyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUs7YUFDdEMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBakVELHNCQWlFQztJQUVELFNBQVMsS0FBSyxDQUFDLE9BQXNDO1FBQ25ELE9BQU8sT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTLGFBQWEsQ0FDcEIsSUFBNEIsRUFDNUIsSUFBWSxFQUNaLE9BQXNDO1FBRXRDLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztRQUUzQixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO1FBRUQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsU0FBUyxjQUFjLENBQUMsSUFBWSxFQUFFLElBQVk7UUFDaEQsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUU5QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDUixJQUFJLEVBQUUsQ0FBQzt3QkFDUCxNQUFNLEVBQUUsSUFBSTt3QkFDWixTQUFTLEVBQUUsSUFBSTt3QkFDZixRQUFRLEVBQUUsS0FBSzt3QkFDZixNQUFNLEVBQUUsS0FBSzt3QkFDYixPQUFPLEVBQUUsS0FBSzt3QkFDZCxPQUFPLEVBQUUsSUFBSTtxQkFDZCxDQUFDLENBQUM7aUJBQ0o7YUFDRjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsU0FBUyxjQUFjLENBQ3JCLE1BQWUsRUFDZixJQUFZLEVBQ1osVUFBd0MsRUFBRTtRQUUxQyxNQUFNLEVBQUUsTUFBTSxHQUFHLEtBQUssRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFFLEdBQUcsR0FBRyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDN0QsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksaUJBQWlCLENBQUMsQ0FBQztRQUN2RSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLGtCQUFrQixDQUFDO1FBQzVELE1BQU0sUUFBUSxHQUFJLEVBQWU7YUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO2FBQzlCLEdBQUcsQ0FBQyxZQUFZLENBQUM7YUFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFFekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXhCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUM3QixLQUFLLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixjQUFjO29CQUNaLENBQUMsS0FBSyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0U7aUJBQU07Z0JBQ0wsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU07b0JBQzFCLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxPQUFPLE9BQU8sWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLE1BQzNELEtBQUssQ0FBQyxPQUNSLEtBQUs7b0JBQ1AsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBRWxCLElBQUksSUFBSSxFQUFFO29CQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xCO2dCQUVELElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDbEIsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO3dCQUNqQixLQUFLLElBQUksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQztxQkFDN0Q7eUJBQU07d0JBQ0wsS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLElBQUksT0FBTyxLQUFLLENBQUM7cUJBQ2pFO2lCQUNGO3FCQUFNO29CQUNMLEtBQUssSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDO2lCQUM1RDthQUNGO1NBQ0Y7UUFFRCxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsS0FBSyxJQUFJLE1BQU0sU0FBUyxJQUFJLENBQUM7YUFDOUI7WUFDRCxLQUFLLElBQUksUUFBUSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLFFBQVEsR0FBRyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLEtBQUssSUFBSSxNQUFNLFNBQVMsTUFBTSxRQUFRLEtBQUssQ0FBQzthQUM3QztZQUNELElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ25CLEtBQUssSUFBSSxNQUFNLFNBQVMsSUFBSSxRQUFRLEdBQUcsQ0FBQzthQUN6QztTQUNGO1FBRUQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFNBQVMsY0FBYyxDQUNyQixJQUFZLEVBQ1osSUFBWSxFQUNaLE9BQXNDO1FBRXRDLE9BQU8sY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRztJQUNILFNBQWdCLFlBQVksQ0FDMUIsSUFBVSxFQUNWLElBQVksRUFDWixPQUFzQztRQUV0QyxJQUFJLElBQUksWUFBWSxNQUFNLEVBQUU7WUFDMUIsT0FBTyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25DO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDM0M7UUFFRCxPQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFkRCxvQ0FjQzs7QUM1UUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7Ozs7O0lBVUgsTUFBTSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxHQUFHLHNCQUFTLENBQUM7SUFpRXZELE1BQU0sS0FBSztRQU1ULFlBQ1MsSUFBWSxFQUNaLE9BQXNCLEVBQzdCLFVBQWlELEVBQzFDLFVBQXdCLEVBQUU7WUFIMUIsU0FBSSxHQUFKLElBQUksQ0FBUTtZQUNaLFlBQU8sR0FBUCxPQUFPLENBQWU7WUFFdEIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7WUFSbkMsZUFBVSxHQUFVLEVBQUUsQ0FBQztZQVVyQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25FLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyw4QkFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFFRCxPQUFPLENBQUMsSUFBWTtZQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxNQUFNLENBQUMsUUFBa0IsRUFBRSxpQkFBOEIsRUFBRTtZQUN6RCxNQUFNLE1BQU0sR0FBRyxjQUFjLENBQUM7WUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdEIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO3dCQUN2QyxDQUFDLENBQUMseUJBQWUsQ0FBQyxPQUFPLENBQUM7d0JBQzFCLENBQUMsQ0FBQyxPQUFPLENBQUM7aUJBQ2I7YUFDRjtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxRQUFRLENBQUMsSUFBWTtZQUNuQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFO2dCQUMvQixPQUFPLEVBQUUsQ0FBQzthQUNYO1lBQ0QsTUFBTSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQztZQUNqRCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBRUQsU0FBUyxDQUFDLE1BQWM7WUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyw4QkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEU7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FDRjtJQUVELE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQTBCLENBQUM7SUFFbEU7O09BRUc7SUFDSCxNQUFhLE1BQU07UUFxQ2pCLFlBQVksVUFBeUIsRUFBRTtZQW5DL0IsV0FBTSxHQUFZLEVBQUUsQ0FBQztZQW9DM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJO2dCQUNqQyxRQUFRO2dCQUNSLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixTQUFTO2dCQUNULE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixLQUFLO2FBQ04sQ0FBQztRQUNKLENBQUM7UUEzQ08sU0FBUyxDQUNmLElBQXVCLEVBQ3ZCLFVBQThCLEVBQzlCLEdBQUcsT0FBc0I7WUFFekIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7aUJBQzNDO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdkQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRU8sTUFBTSxDQUNaLElBQVksRUFDWixNQUFtQjtZQUVuQixNQUFNLGFBQWEsR0FBWSxFQUFFLENBQUM7WUFDbEMsTUFBTSxPQUFPLEdBQVksRUFBRSxDQUFDO1lBQzVCLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDL0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN2QixhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNyQjtpQkFDRjthQUNGO1lBQ0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNwQyxDQUFDO1FBY0Q7O1dBRUc7UUFDSCxHQUFHLENBQ0QsS0FBd0IsRUFDeEIsR0FBRyxVQUFpQztZQUVwQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQ25CLEtBQUssRUFDTCxVQUFnQyxFQUNoQyxRQUFRLEVBQ1IsS0FBSyxFQUNMLE1BQU0sRUFDTixLQUFLLENBQ04sQ0FBQztRQUNKLENBQUM7UUFFRDs7V0FFRztRQUNILGNBQWMsQ0FBQyxVQUFpQyxFQUFFO1lBQ2hELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEMsT0FBTyxLQUFLLFVBQVUsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJO2dCQUNoRCxNQUFNLElBQUksRUFBRSxDQUFDO2dCQUNiLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxFQUFlLENBQUM7Z0JBQ3ZDLElBQ0UsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU07b0JBQ3hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLGdCQUFNLENBQUMsUUFBUSxFQUMzQztvQkFDQSxNQUFNLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDLEdBQUcsQ0FDbEQsT0FBd0IsQ0FDekIsQ0FBQztvQkFDRixJQUFJLG9CQUFvQixFQUFFO3dCQUN4QixLQUFLLE1BQU0sS0FBSyxJQUFJLG9CQUFvQixFQUFFOzRCQUN4QyxLQUFLLE1BQU0sTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7Z0NBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7NkJBQ3JCO3lCQUNGO3FCQUNGO29CQUNELE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUNqRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7NEJBQ2pCLElBQUksdUJBQTRCLENBQUM7NEJBQ2pDLElBQUksT0FBTyxPQUFPLENBQUMsY0FBYyxLQUFLLFVBQVUsRUFBRTtnQ0FDaEQsdUJBQXVCLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDOzZCQUNwRDtpQ0FBTTtnQ0FDTCx1QkFBdUIsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDOzZCQUNoRDs0QkFDRCxNQUFNLHVCQUF1QixDQUFDO3lCQUMvQjs2QkFBTTs0QkFDTCxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxnQkFBTSxDQUFDLGNBQWMsQ0FBQzs0QkFDaEQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQzt5QkFDckQ7cUJBQ0Y7eUJBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO3dCQUN2QixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTs0QkFDeEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxFQUFFLENBQUM7NEJBQ3BDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzs0QkFDM0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQzt5QkFDckQ7NkJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTs0QkFDL0MsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO2dDQUNqQixJQUFJLG1CQUF3QixDQUFDO2dDQUM3QixJQUFJLE9BQU8sT0FBTyxDQUFDLGdCQUFnQixLQUFLLFVBQVUsRUFBRTtvQ0FDbEQsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7aUNBQ2xEO3FDQUFNO29DQUNMLG1CQUFtQixHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztpQ0FDOUM7Z0NBQ0QsTUFBTSxtQkFBbUIsQ0FBQzs2QkFDM0I7aUNBQU07Z0NBQ0wsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQztnQ0FDbEQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQzs2QkFDckQ7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7WUFDSCxDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQ7O1dBRUc7UUFDSCxNQUFNLENBQ0osS0FBd0IsRUFDeEIsR0FBRyxVQUFpQztZQUVwQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQWdDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUVEOztXQUVHO1FBQ0gsR0FBRyxDQUNELEtBQXdCLEVBQ3hCLEdBQUcsVUFBaUM7WUFFcEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFnQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFFRDs7V0FFRztRQUNILElBQUksQ0FDRixLQUF3QixFQUN4QixHQUFHLFVBQWlDO1lBRXBDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBZ0MsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxPQUFPLENBQ0wsS0FBd0IsRUFDeEIsR0FBRyxVQUFpQztZQUVwQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQWdDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUVEOztXQUVHO1FBQ0gsS0FBSyxDQUNILEtBQXdCLEVBQ3hCLEdBQUcsVUFBaUM7WUFFcEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFnQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFFRDs7V0FFRztRQUNILElBQUksQ0FDRixLQUF3QixFQUN4QixHQUFHLFVBQWlDO1lBRXBDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBZ0MsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxHQUFHLENBQ0QsS0FBd0IsRUFDeEIsR0FBRyxVQUFpQztZQUVwQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQWdDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQztRQUVELDZFQUE2RTtRQUM3RSxNQUFNO1lBQ0osTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUNwQixPQUFzQixFQUN0QixJQUF5QixFQUNWLEVBQUU7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDekMsTUFBTSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFFN0QsTUFBTSxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlELG1CQUFtQixDQUFDLEdBQUcsQ0FDckIsT0FBTyxFQUNQLG9CQUFvQjtvQkFDbEIsQ0FBQyxDQUFDLENBQUMsR0FBRyxvQkFBb0IsRUFBRSxHQUFHLGFBQWEsQ0FBQztvQkFDN0MsQ0FBQyxDQUFDLGFBQWEsQ0FDbEIsQ0FBQztnQkFFRixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFFdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQ25CLE9BQU8sSUFBSSxFQUFFLENBQUM7aUJBQ2Y7Z0JBRUQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FDMUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQXNCLEVBQUUsSUFBeUIsRUFBRSxFQUFFO3dCQUM5RCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN0QyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDeEQsT0FBTyxJQUFJLEVBQUUsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLEVBQ0QsRUFBd0IsQ0FDekIsQ0FBQztnQkFDRixPQUFPLHVCQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBd0IsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQztZQUNGLE9BQU8sUUFBc0IsQ0FBQztRQUNoQyxDQUFDO0tBQ0Y7SUExT0Qsd0JBME9DOztBQzFZRDs7O0dBR0c7Ozs7SUE4Q0gsU0FBUyxRQUFRLENBQUMsSUFBWSxFQUFFLElBQVk7UUFDMUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQUcsQ0FBQyxDQUFDO1FBQ3BELEtBQUssTUFBTSxPQUFPLElBQUksT0FBTyxFQUFFO1lBQzdCLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsS0FBSyxVQUFVLE1BQU0sQ0FBQyxJQUFZO1FBQ2hDLElBQUk7WUFDRixPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDekM7UUFBQyxNQUFNO1lBQ04sT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFhO1FBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVEO2lCQUNhO0lBQ04sS0FBSyxVQUFVLElBQUksQ0FDeEIsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFXLEVBQzlCLElBQVksRUFDWixVQUF1QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7UUFFbkMsTUFBTSxFQUNKLE1BQU0sR0FBRyxJQUFJLEVBQ2IsVUFBVSxFQUNWLE1BQU0sR0FBRyxJQUFJLEVBQ2IsSUFBSSxHQUFHLElBQUksRUFDWCxLQUFLLEVBQ0wsTUFBTSxHQUFHLEtBQUssRUFDZCxTQUFTLEdBQUcsS0FBSyxFQUNqQixNQUFNLEdBQUcsQ0FBQyxFQUNWLElBQUksRUFDTCxHQUFHLE9BQU8sQ0FBQztRQUNaLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUNwRCxJQUFJLEdBQUcseUJBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLEtBQUssSUFBSSxhQUFhLEVBQUU7WUFDMUIsSUFBSSxJQUFJLEtBQUssQ0FBQztTQUNmO1FBRUQsSUFBSSxHQUFHLHFCQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNuQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFDRSxNQUFNO1lBQ04sT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxJQUFJO1lBQ25ELENBQUMsTUFBTSxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQzVCO1lBQ0EsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUM7WUFDcEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMxQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQU0sSUFDTCxJQUFJO1lBQ0osT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsS0FBSyxNQUFNO1lBQ3ZELENBQUMsTUFBTSxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQzVCO1lBQ0EsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUM7WUFDcEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMxQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hDLEtBQUssSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFO2dCQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDcEIsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7aUJBQ2pCO2dCQUNELElBQUksTUFBTSxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRTtvQkFDakMsSUFBSSxJQUFJLEdBQUcsQ0FBQztvQkFDWixNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtRQUVELElBQUksS0FBb0IsQ0FBQztRQUN6QixJQUFJO1lBQ0YsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5QixJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDdkIsSUFBSSxNQUFNLElBQUksS0FBSyxFQUFFO29CQUNuQixJQUFJLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQztvQkFDcEIsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7cUJBQU07b0JBQ0wsT0FBTztpQkFDUjthQUNGO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksR0FBRyxZQUFZLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pDLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtvQkFDeEMsTUFBTSw4QkFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3pDO2FBQ0Y7WUFDRCxNQUFNLDhCQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztRQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUM1RCxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzFDLE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELElBQUksU0FBUyxFQUFFO2dCQUNiLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDOUI7WUFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsUUFBUSxDQUFDLElBQUk7Z0JBQ1gsV0FBVyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQU8sQ0FBQyxrQkFBUSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdFO1FBQ0QsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBcEdELG9CQW9HQzs7QUM3S0QseUVBQXlFOzs7O0lBRWhFLHVDQUFBLFdBQVcsQ0FBQTtJQUNYLCtCQUFBLE9BQU8sQ0FBQTtJQUNQLG1DQUFBLFNBQVMsQ0FBQTtJQUNULDRDQUFBLE9BQU8sQ0FBcUI7SUFDNUIsZ0NBQUEsUUFBUSxDQUFBO0lBQVEsK0JBQUEsT0FBTyxDQUFBO0lBQ3ZCLGlDQUFBLFFBQVEsQ0FBQTtJQUdmLDZCQUFBLE1BQU0sQ0FBQTtJQUlDLHlCQUFBLElBQUksQ0FBQTtJQUlKLDJCQUFBLE1BQU0sQ0FBQTtJQUFFLGdDQUFBLFdBQVcsQ0FBQTs7Ozs7SUNmNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBRWxCLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDVixNQUFNLEdBQUcsR0FBRyxJQUFJLG9CQUFXLEVBQUUsQ0FBQztRQUU5QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1osR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM5QyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==