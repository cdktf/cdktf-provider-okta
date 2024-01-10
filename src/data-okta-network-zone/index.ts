// https://registry.terraform.io/providers/okta/okta/4.6.3/docs/data-sources/network_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaNetworkZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the network zone to retrieve, conflicts with `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/data-sources/network_zone#id DataOktaNetworkZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the network zone to retrieve, conflicts with `id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/data-sources/network_zone#name DataOktaNetworkZone#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/data-sources/network_zone okta_network_zone}
*/
export class DataOktaNetworkZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_network_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaNetworkZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaNetworkZone to import
  * @param importFromId The id of the existing DataOktaNetworkZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/data-sources/network_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaNetworkZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_network_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/data-sources/network_zone okta_network_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaNetworkZoneConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaNetworkZoneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_network_zone',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.6.3',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asns - computed: true, optional: false, required: false
  public get asns() {
    return cdktf.Fn.tolist(this.getListAttribute('asns'));
  }

  // dynamic_locations - computed: true, optional: false, required: false
  public get dynamicLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('dynamic_locations'));
  }

  // dynamic_proxy_type - computed: true, optional: false, required: false
  public get dynamicProxyType() {
    return this.getStringAttribute('dynamic_proxy_type');
  }

  // gateways - computed: true, optional: false, required: false
  public get gateways() {
    return cdktf.Fn.tolist(this.getListAttribute('gateways'));
  }

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

  // proxies - computed: true, optional: false, required: false
  public get proxies() {
    return cdktf.Fn.tolist(this.getListAttribute('proxies'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
