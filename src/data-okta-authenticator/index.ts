/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/authenticator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAuthenticatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/authenticator#id DataOktaAuthenticator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/authenticator#key DataOktaAuthenticator#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/authenticator#name DataOktaAuthenticator#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/authenticator okta_authenticator}
*/
export class DataOktaAuthenticator extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_authenticator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/authenticator okta_authenticator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAuthenticatorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaAuthenticatorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_authenticator',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.1.0',
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
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // provider_auth_port - computed: true, optional: false, required: false
  public get providerAuthPort() {
    return this.getNumberAttribute('provider_auth_port');
  }

  // provider_hostname - computed: true, optional: false, required: false
  public get providerHostname() {
    return this.getStringAttribute('provider_hostname');
  }

  // provider_instance_id - computed: true, optional: false, required: false
  public get providerInstanceId() {
    return this.getStringAttribute('provider_instance_id');
  }

  // provider_json - computed: true, optional: false, required: false
  public get providerJson() {
    return this.getStringAttribute('provider_json');
  }

  // provider_type - computed: true, optional: false, required: false
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }

  // provider_user_name_template - computed: true, optional: false, required: false
  public get providerUserNameTemplate() {
    return this.getStringAttribute('provider_user_name_template');
  }

  // settings - computed: true, optional: false, required: false
  public get settings() {
    return this.getStringAttribute('settings');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
