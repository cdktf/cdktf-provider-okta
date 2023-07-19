/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/domain_verification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainVerificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain's ID
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/domain_verification#domain_id DomainVerification#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/domain_verification#id DomainVerification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/domain_verification okta_domain_verification}
*/
export class DomainVerification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_domain_verification";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/domain_verification okta_domain_verification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainVerificationConfig
  */
  public constructor(scope: Construct, id: string, config: DomainVerificationConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_domain_verification',
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
    this._domainId = config.domainId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.stringToTerraform(this._domainId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
