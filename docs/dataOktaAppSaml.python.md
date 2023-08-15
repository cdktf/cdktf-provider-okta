# `data_okta_app_saml`

Refer to the Terraform Registory for docs: [`data_okta_app_saml`](https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml).

# `dataOktaAppSaml` Submodule <a name="`dataOktaAppSaml` Submodule" id="@cdktf/provider-okta.dataOktaAppSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaAppSaml <a name="DataOktaAppSaml" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml okta_app_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_app_saml

dataOktaAppSaml.DataOktaAppSaml(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  active_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  label: str = None,
  label_prefix: str = None,
  request_compressed: typing.Union[bool, IResolvable] = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_users: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.activeOnly">active_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Search only ACTIVE applications. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#id DataOktaAppSaml#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#label DataOktaAppSaml#label}. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.labelPrefix">label_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#label_prefix DataOktaAppSaml#label_prefix}. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.requestCompressed">request_compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_only`<sup>Optional</sup> <a name="active_only" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.activeOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Search only ACTIVE applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#active_only DataOktaAppSaml#active_only}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#id DataOktaAppSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#label DataOktaAppSaml#label}.

---

##### `label_prefix`<sup>Optional</sup> <a name="label_prefix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.labelPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#label_prefix DataOktaAppSaml#label_prefix}.

---

##### `request_compressed`<sup>Optional</sup> <a name="request_compressed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.requestCompressed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#request_compressed DataOktaAppSaml#request_compressed}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.skipGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#skip_groups DataOktaAppSaml#skip_groups}

---

##### `skip_users`<sup>Optional</sup> <a name="skip_users" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.skipUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#skip_users DataOktaAppSaml#skip_users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetActiveOnly">reset_active_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetLabelPrefix">reset_label_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetRequestCompressed">reset_request_compressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetSkipGroups">reset_skip_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetSkipUsers">reset_skip_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_active_only` <a name="reset_active_only" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetActiveOnly"></a>

```python
def reset_active_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_label_prefix` <a name="reset_label_prefix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetLabelPrefix"></a>

```python
def reset_label_prefix() -> None
```

##### `reset_request_compressed` <a name="reset_request_compressed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetRequestCompressed"></a>

```python
def reset_request_compressed() -> None
```

##### `reset_skip_groups` <a name="reset_skip_groups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetSkipGroups"></a>

```python
def reset_skip_groups() -> None
```

##### `reset_skip_users` <a name="reset_skip_users" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetSkipUsers"></a>

```python
def reset_skip_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_app_saml

dataOktaAppSaml.DataOktaAppSaml.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_app_saml

dataOktaAppSaml.DataOktaAppSaml.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_app_saml

dataOktaAppSaml.DataOktaAppSaml.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.acsEndpoints">acs_endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.appSettingsJson">app_settings_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.assertionSigned">assertion_signed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.attributeStatements">attribute_statements</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList">DataOktaAppSamlAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.authnContextClassRef">authn_context_class_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.defaultRelayState">default_relay_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.digestAlgorithm">digest_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.features">features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.hideIos">hide_ios</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.hideWeb">hide_web</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.honorForceAuthn">honor_force_authn</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.idpIssuer">idp_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.inlineHookId">inline_hook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.links">links</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.recipient">recipient</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.responseSigned">response_signed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.samlSignedRequestEnabled">saml_signed_request_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutCertificate">single_logout_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutIssuer">single_logout_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutUrl">single_logout_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.spIssuer">sp_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.ssoUrl">sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.subjectNameIdFormat">subject_name_id_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.subjectNameIdTemplate">subject_name_id_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.activeOnlyInput">active_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelPrefixInput">label_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.requestCompressedInput">request_compressed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipGroupsInput">skip_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipUsersInput">skip_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.activeOnly">active_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelPrefix">label_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.requestCompressed">request_compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `accessibility_error_redirect_url`<sup>Required</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url`<sup>Required</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

---

##### `accessibility_self_service`<sup>Required</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilitySelfService"></a>

```python
accessibility_self_service: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `acs_endpoints`<sup>Required</sup> <a name="acs_endpoints" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.acsEndpoints"></a>

```python
acs_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_settings_json`<sup>Required</sup> <a name="app_settings_json" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.appSettingsJson"></a>

```python
app_settings_json: str
```

- *Type:* str

---

##### `assertion_signed`<sup>Required</sup> <a name="assertion_signed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.assertionSigned"></a>

```python
assertion_signed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `attribute_statements`<sup>Required</sup> <a name="attribute_statements" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.attributeStatements"></a>

```python
attribute_statements: DataOktaAppSamlAttributeStatementsList
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList">DataOktaAppSamlAttributeStatementsList</a>

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `authn_context_class_ref`<sup>Required</sup> <a name="authn_context_class_ref" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.authnContextClassRef"></a>

```python
authn_context_class_ref: str
```

- *Type:* str

---

##### `auto_submit_toolbar`<sup>Required</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `default_relay_state`<sup>Required</sup> <a name="default_relay_state" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.defaultRelayState"></a>

```python
default_relay_state: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `digest_algorithm`<sup>Required</sup> <a name="digest_algorithm" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.digestAlgorithm"></a>

```python
digest_algorithm: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.features"></a>

```python
features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_ios`<sup>Required</sup> <a name="hide_ios" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.hideIos"></a>

```python
hide_ios: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hide_web`<sup>Required</sup> <a name="hide_web" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.hideWeb"></a>

```python
hide_web: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `honor_force_authn`<sup>Required</sup> <a name="honor_force_authn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.honorForceAuthn"></a>

```python
honor_force_authn: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `idp_issuer`<sup>Required</sup> <a name="idp_issuer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.idpIssuer"></a>

```python
idp_issuer: str
```

- *Type:* str

---

##### `inline_hook_id`<sup>Required</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.inlineHookId"></a>

```python
inline_hook_id: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.links"></a>

```python
links: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.recipient"></a>

```python
recipient: str
```

- *Type:* str

---

##### `response_signed`<sup>Required</sup> <a name="response_signed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.responseSigned"></a>

```python
response_signed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `saml_signed_request_enabled`<sup>Required</sup> <a name="saml_signed_request_enabled" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.samlSignedRequestEnabled"></a>

```python
saml_signed_request_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `signature_algorithm`<sup>Required</sup> <a name="signature_algorithm" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

---

##### `single_logout_certificate`<sup>Required</sup> <a name="single_logout_certificate" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutCertificate"></a>

```python
single_logout_certificate: str
```

- *Type:* str

---

##### `single_logout_issuer`<sup>Required</sup> <a name="single_logout_issuer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutIssuer"></a>

```python
single_logout_issuer: str
```

- *Type:* str

---

##### `single_logout_url`<sup>Required</sup> <a name="single_logout_url" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutUrl"></a>

```python
single_logout_url: str
```

- *Type:* str

---

##### `sp_issuer`<sup>Required</sup> <a name="sp_issuer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.spIssuer"></a>

```python
sp_issuer: str
```

- *Type:* str

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subject_name_id_format`<sup>Required</sup> <a name="subject_name_id_format" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.subjectNameIdFormat"></a>

```python
subject_name_id_format: str
```

- *Type:* str

---

##### `subject_name_id_template`<sup>Required</sup> <a name="subject_name_id_template" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.subjectNameIdTemplate"></a>

```python
subject_name_id_template: str
```

- *Type:* str

---

##### `user_name_template`<sup>Required</sup> <a name="user_name_template" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

---

##### `user_name_template_push_status`<sup>Required</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

---

##### `user_name_template_suffix`<sup>Required</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

---

##### `user_name_template_type`<sup>Required</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `active_only_input`<sup>Optional</sup> <a name="active_only_input" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.activeOnlyInput"></a>

```python
active_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `label_prefix_input`<sup>Optional</sup> <a name="label_prefix_input" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelPrefixInput"></a>

```python
label_prefix_input: str
```

- *Type:* str

---

##### `request_compressed_input`<sup>Optional</sup> <a name="request_compressed_input" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.requestCompressedInput"></a>

```python
request_compressed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_groups_input`<sup>Optional</sup> <a name="skip_groups_input" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipGroupsInput"></a>

```python
skip_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_users_input`<sup>Optional</sup> <a name="skip_users_input" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipUsersInput"></a>

```python
skip_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `active_only`<sup>Required</sup> <a name="active_only" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.activeOnly"></a>

```python
active_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `label_prefix`<sup>Required</sup> <a name="label_prefix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelPrefix"></a>

```python
label_prefix: str
```

- *Type:* str

---

##### `request_compressed`<sup>Required</sup> <a name="request_compressed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.requestCompressed"></a>

```python
request_compressed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_groups`<sup>Required</sup> <a name="skip_groups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_users`<sup>Required</sup> <a name="skip_users" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipUsers"></a>

```python
skip_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaAppSamlAttributeStatements <a name="DataOktaAppSamlAttributeStatements" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatements.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_app_saml

dataOktaAppSaml.DataOktaAppSamlAttributeStatements()
```


### DataOktaAppSamlConfig <a name="DataOktaAppSamlConfig" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_app_saml

dataOktaAppSaml.DataOktaAppSamlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  active_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  label: str = None,
  label_prefix: str = None,
  request_compressed: typing.Union[bool, IResolvable] = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_users: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.activeOnly">active_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Search only ACTIVE applications. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#id DataOktaAppSaml#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#label DataOktaAppSaml#label}. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.labelPrefix">label_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#label_prefix DataOktaAppSaml#label_prefix}. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.requestCompressed">request_compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_only`<sup>Optional</sup> <a name="active_only" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.activeOnly"></a>

```python
active_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Search only ACTIVE applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#active_only DataOktaAppSaml#active_only}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#id DataOktaAppSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#label DataOktaAppSaml#label}.

---

##### `label_prefix`<sup>Optional</sup> <a name="label_prefix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.labelPrefix"></a>

```python
label_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#label_prefix DataOktaAppSaml#label_prefix}.

---

##### `request_compressed`<sup>Optional</sup> <a name="request_compressed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.requestCompressed"></a>

```python
request_compressed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#request_compressed DataOktaAppSaml#request_compressed}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#skip_groups DataOktaAppSaml#skip_groups}

---

##### `skip_users`<sup>Optional</sup> <a name="skip_users" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.skipUsers"></a>

```python
skip_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/data-sources/app_saml#skip_users DataOktaAppSaml#skip_users}

---

## Classes <a name="Classes" id="Classes"></a>

### DataOktaAppSamlAttributeStatementsList <a name="DataOktaAppSamlAttributeStatementsList" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_app_saml

dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOktaAppSamlAttributeStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOktaAppSamlAttributeStatementsOutputReference <a name="DataOktaAppSamlAttributeStatementsOutputReference" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_app_saml

dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.filterValue">filter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatements">DataOktaAppSamlAttributeStatements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `filter_value`<sup>Required</sup> <a name="filter_value" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.filterValue"></a>

```python
filter_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.internalValue"></a>

```python
internal_value: DataOktaAppSamlAttributeStatements
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatements">DataOktaAppSamlAttributeStatements</a>

---



