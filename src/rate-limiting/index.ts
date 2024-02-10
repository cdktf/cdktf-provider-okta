/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/rate_limiting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RateLimitingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Called during authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/rate_limiting#authorize RateLimiting#authorize}
  */
  readonly authorize: string;
  /**
  * Enables rate limit warning, violation, notification emails and banners when this org meets rate limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/rate_limiting#communications_enabled RateLimiting#communications_enabled}
  */
  readonly communicationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/rate_limiting#id RateLimiting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Called when accessing the Okta hosted login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/rate_limiting#login RateLimiting#login}
  */
  readonly login: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/rate_limiting okta_rate_limiting}
*/
export class RateLimiting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_rate_limiting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RateLimiting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RateLimiting to import
  * @param importFromId The id of the existing RateLimiting that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/rate_limiting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RateLimiting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_rate_limiting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.7.0/docs/resources/rate_limiting okta_rate_limiting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RateLimitingConfig
  */
  public constructor(scope: Construct, id: string, config: RateLimitingConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_rate_limiting',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.7.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorize = config.authorize;
    this._communicationsEnabled = config.communicationsEnabled;
    this._id = config.id;
    this._login = config.login;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorize - computed: false, optional: false, required: true
  private _authorize?: string; 
  public get authorize() {
    return this.getStringAttribute('authorize');
  }
  public set authorize(value: string) {
    this._authorize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeInput() {
    return this._authorize;
  }

  // communications_enabled - computed: false, optional: true, required: false
  private _communicationsEnabled?: boolean | cdktf.IResolvable; 
  public get communicationsEnabled() {
    return this.getBooleanAttribute('communications_enabled');
  }
  public set communicationsEnabled(value: boolean | cdktf.IResolvable) {
    this._communicationsEnabled = value;
  }
  public resetCommunicationsEnabled() {
    this._communicationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationsEnabledInput() {
    return this._communicationsEnabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // login - computed: false, optional: false, required: true
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorize: cdktf.stringToTerraform(this._authorize),
      communications_enabled: cdktf.booleanToTerraform(this._communicationsEnabled),
      id: cdktf.stringToTerraform(this._id),
      login: cdktf.stringToTerraform(this._login),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorize: {
        value: cdktf.stringToHclTerraform(this._authorize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communications_enabled: {
        value: cdktf.booleanToHclTerraform(this._communicationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login: {
        value: cdktf.stringToHclTerraform(this._login),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
